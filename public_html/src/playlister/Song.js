/**
 * Song.js
 *
 * This class represents a song.
 *
 * @author McKilla Gorilla
 * @author ?
 */
export default class Song {
  constructor() {}

  setTitle(title) {
    this.title = title;
  }

  setArtist(artist) {
    this.artist = artist;
  }

  setYouTubeId(youtubeId) {
    this.youtubeId = youtubeId;
  }

  getTitle() {
    return this.title;
  }

  getArtist() {
    return this.artist;
  }

  getYouTubeId() {
    return this.youtubeId;
  }
}
