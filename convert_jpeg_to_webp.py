#!/usr/bin/env python3
"""
Script to convert all JPEG files in the public/images directory to WebP format.
This script will convert files with extensions: .jpg, .JPG, .jpeg, .JPEG

Requirements:
- pip install Pillow

Usage:
    python convert_jpeg_to_webp.py
"""

import os
import sys
from pathlib import Path
from PIL import Image
import time

def convert_jpeg_to_webp(input_path, output_path, quality=85):
    """
    Convert a JPEG file to WebP format.
    
    Args:
        input_path (str): Path to the input JPEG file
        output_path (str): Path to the output WebP file
        quality (int): WebP quality (0-100, default 85)
    
    Returns:
        bool: True if conversion was successful, False otherwise
    """
    try:
        # Open the image
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for RGBA images)
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Save as WebP
            img.save(output_path, 'WebP', quality=quality, optimize=True)
            
        return True
    except Exception as e:
        print(f"Error converting {input_path}: {str(e)}")
        return False

def get_file_size(file_path):
    """Get file size in MB."""
    return os.path.getsize(file_path) / (1024 * 1024)

def main():
    # Get the script directory and construct the correct path
    script_dir = Path(__file__).parent.absolute()
    target_dir = script_dir / "public" / "images"
    
    # Alternative paths to try
    alternative_paths = [
        Path("public/images"),
        Path("./public/images"),
        Path("C:/Users/Eduardo/projetosdev/v2_mariana_nails/public/images")
    ]
    
    # Check if directory exists, try alternatives if not
    if not target_dir.exists():
        print(f"Directory '{target_dir}' does not exist. Trying alternative paths...")
        found = False
        for alt_path in alternative_paths:
            if alt_path.exists():
                target_dir = alt_path
                found = True
                print(f"Found directory at: {target_dir}")
                break
        
        if not found:
            print("Error: Could not find the public/images directory!")
            print("Current working directory:", os.getcwd())
            print("Script directory:", script_dir)
            print("\nTried the following paths:")
            for path in [target_dir] + alternative_paths:
                print(f"  - {path} (exists: {path.exists()})")
            sys.exit(1)
    
    print(f"Using directory: {target_dir}")
    
    # JPEG file extensions to look for
    jpeg_extensions = {'.jpg', '.jpeg', '.JPG', '.JPEG'}
    
    # Find all JPEG files
    jpeg_files = []
    for file_path in target_dir.iterdir():
        if file_path.is_file() and file_path.suffix in jpeg_extensions:
            jpeg_files.append(file_path)
    
    if not jpeg_files:
        print("No JPEG files found in the directory.")
        return
    
    print(f"\nFound {len(jpeg_files)} JPEG files to convert:")
    for file_path in jpeg_files:
        size_mb = get_file_size(file_path)
        print(f"  - {file_path.name} ({size_mb:.2f} MB)")
    
    print("\nStarting conversion...")
    
    successful_conversions = 0
    failed_conversions = 0
    total_original_size = 0
    total_webp_size = 0
    
    for i, jpeg_file in enumerate(jpeg_files, 1):
        print(f"\nProcessing {i}/{len(jpeg_files)}: {jpeg_file.name}")
        
        # Create output filename (replace extension with .webp)
        webp_file = jpeg_file.with_suffix('.webp')
        
        # Check if WebP file already exists
        if webp_file.exists():
            print(f"  WebP file already exists: {webp_file.name}")
            webp_size = get_file_size(webp_file)
            total_webp_size += webp_size
            continue
        
        # Get original file size
        original_size = get_file_size(jpeg_file)
        total_original_size += original_size
        
        # Convert to WebP
        start_time = time.time()
        if convert_jpeg_to_webp(str(jpeg_file), str(webp_file)):
            conversion_time = time.time() - start_time
            webp_size = get_file_size(webp_file)
            total_webp_size += webp_size
            
            compression_ratio = ((original_size - webp_size) / original_size) * 100
            
            print(f"  ✓ Converted successfully!")
            print(f"    Original: {original_size:.2f} MB")
            print(f"    WebP: {webp_size:.2f} MB")
            print(f"    Size reduction: {compression_ratio:.1f}%")
            print(f"    Time: {conversion_time:.2f}s")
            
            successful_conversions += 1
        else:
            failed_conversions += 1
    
    # Summary
    print(f"\n{'='*50}")
    print("CONVERSION SUMMARY")
    print(f"{'='*50}")
    print(f"Total files found: {len(jpeg_files)}")
    print(f"Successful conversions: {successful_conversions}")
    print(f"Failed conversions: {failed_conversions}")
    print(f"Already existed: {len(jpeg_files) - successful_conversions - failed_conversions}")
    
    if total_original_size > 0 and total_webp_size > 0:
        total_compression = ((total_original_size - total_webp_size) / total_original_size) * 100
        print(f"\nTotal original size: {total_original_size:.2f} MB")
        print(f"Total WebP size: {total_webp_size:.2f} MB")
        print(f"Total size saved: {total_original_size - total_webp_size:.2f} MB")
        print(f"Overall compression: {total_compression:.1f}%")
    
    print(f"\nConversion completed!")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nConversion interrupted by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\nUnexpected error: {str(e)}")
        sys.exit(1)