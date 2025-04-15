// SQL queries used by Album DAO
export const queries = {
    readAlbums: 'SELECT * FROM album',
    readAlbumsByAlbumId: 'SELECT * FROM album WHERE albumId = ?',
    createAlbum: 'INSERT INTO album (title, artistId, description) VALUES (?, ?, ?)',
    updateAlbum: 'UPDATE album SET title = ?, artistId = ?, description = ? WHERE albumId = ?',
    deleteAlbum: 'DELETE FROM album WHERE albumId = ?'
  };