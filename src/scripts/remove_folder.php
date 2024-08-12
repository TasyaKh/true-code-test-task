<?php
function deleteFolder($folderPath) {
    // Check if the folder exists
    if (!is_dir($folderPath)) {
        echo "Folder does not exist.";
        return false;
    }

    // Iterate through the folder contents
    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($folderPath, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );

    // Delete files and folders
    foreach ($files as $fileinfo) {
        if ($fileinfo->isDir()) {
            rmdir($fileinfo->getRealPath()); // Remove directory
        } else {
            unlink($fileinfo->getRealPath()); // Remove file
        }
    }

    // Finally, remove the main folder
    rmdir($folderPath);

    echo "Folder and its contents removed successfully!";
    return true;
}

// Get the folder path from the URL using the 'folder' query parameter
$folderPath = isset($_GET['folder']) ? $_GET['folder'] : '';

if ($folderPath) {
    // Call the function to delete the folder
    deleteFolder($folderPath);
} else {
    echo "No folder specified.";
}
?>
