@echo off
echo Installing required dependencies...
pip install -r requirements_converter.txt

echo.
echo Starting JPEG to WebP conversion...
python convert_jpeg_to_webp.py

echo.
echo Press any key to exit...
pause > nul