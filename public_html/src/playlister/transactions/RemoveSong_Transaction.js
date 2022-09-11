import jsTPS_Transaction from '../../common/jsTPS.js';
import Song from '../Song.js';
/**
 * AddSong_Transaction
 *
 * This class represents a transaction that removes and
 * undoes the removal of a song. It will be managed by the transaction stack.
 *
 * @author Danny Lian
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
  constructor(initModel, songIdx) {
    super();
    this.model = initModel;
    this.songIdx = songIdx;
  }

  doTransaction() {
    this.removedSong = this.model.removeSong(this.songIdx);
  }

  undoTransaction() {
    this.model.undoRemoveSong(this.songIdx, this.removedSong);
  }
}
