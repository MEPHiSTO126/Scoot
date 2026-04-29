from PIL import Image
import numpy as np

# Load the image
img_path = r"c:\Users\OLA\Documents\GnidoC\scoot-frontend\public\assets\images\mobile-map.png"
img = Image.open(img_path).convert("RGB")
data = np.array(img)

# Target color Scoot Yellow: #FCB72B -> (252, 183, 43)
target_color = np.array([252, 183, 43])

# Find all pixels that match the target color (with some tolerance)
tolerance = 30
diff = np.abs(data - target_color)
mask = np.all(diff < tolerance, axis=2)

y_coords, x_coords = np.where(mask)

if len(y_coords) == 0:
    print("No yellow dots found!")
    exit()

# Group pixels into 4 clusters (the 4 cities)
from scipy.cluster.vq import kmeans
coords = np.column_stack((x_coords, y_coords)).astype(float)
centroids, _ = kmeans(coords, 4)

# Map dimensions
height, width = data.shape[:2]

# Print the percentages
for i, (x, y) in enumerate(centroids):
    x_pct = (x / width) * 100
    y_pct = (y / height) * 100
    print(f"Dot {i+1}: left: {x_pct:.2f}%, top: {y_pct:.2f}%")
