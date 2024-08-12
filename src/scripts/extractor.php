<?php

// Get the file path from the URL using the 'file' query parameter
$filePath = isset($_GET['file']) ? $_GET['file'] : '';

echo $filePath;

if ($filePath && file_exists($filePath)) {
    $zip = new ZipArchive;

    // Attempt to open the ZIP file
    if ($zip->open($filePath) === TRUE) {
        // Extract to the desired directory
        $zip->extractTo('extracted');
        $zip->close();
        echo 'Extraction completed successfully.';
    } else {
        echo 'Failed to open the ZIP file.';
    }
} else {
    echo 'Invalid file path or file does not exist.';
}

?>
