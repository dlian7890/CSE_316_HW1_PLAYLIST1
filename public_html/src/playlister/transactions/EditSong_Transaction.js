import jsTPS_Transaction from '../../common/jsTPS.js';
/**
 * EditSong_Transaction
 *
 * This class represents a transaction that edits and
 * unedits a song. It will be managed by the transaction stack.
 *
 * @author Danny Lian
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
  constructor(
    initModel,
    songIdx,
    preTitle,
    prevArtist,
    prevYouTubeId,
    newTitle,
    newArtist,
    newYouTubeId
  ) {
    super();
    this.model = initModel;
    this.songIdx = songIdx;
    this.preTitle = preTitle;
    this.prevArtist = prevArtist;
    this.prevYouTubeId = prevYouTubeId;
    this.newTitle = newTitle;
    this.newArtist = newArtist;
    this.newYouTubeId = newYouTubeId;
  }

  doTransaction() {
    this.model.editSong(
      this.songIdx,
      this.newTitle,
      this.newArtist,
      this.newYouTubeId
    );
  }

  undoTransaction() {
    this.model.editSong(
      this.songIdx,
      this.preTitle,
      this.prevArtist,
      this.prevYouTubeId
    );
  }
}
