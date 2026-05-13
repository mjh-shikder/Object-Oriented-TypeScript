// Abstraction
// idea
// implementaiton pore korbe

/**
 * eita 2 vabe kora jay
 * 1. Interface use kore
 * 2. abstract class use kore
 */


//? Interface use koira eita dia Class define korte hoy 

interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}


//? implementaiton
class MusicPlayer implements MediaPlayer{
play(): void {
    console.log(`Playing Music...`);
    }
    
    pause(): void {
        console.log(`Music Paused`);     
    }

    stop(): void {
        console.log(`Music Stopped`);   
    }

}

//? Createting instance with MusicPlayer Class
const MezbaPlayer = new MusicPlayer()

MezbaPlayer.play()


//* Abstract Class
//? Abstract Class use koira eita diya Child Class Define kore use korte hoy 
//? Abstract Class diya Instance create kora jay na
abstract class MediaPlayer2 {
   abstract play(): void;
   abstract pasue(): void;
   abstract stop(): void;
}


class MusicPlayer2 extends MediaPlayer2{
    play(): void {
        console.log(`Abstract Playing Music...`);
    }

    pasue(): void {
        console.log(`Abstract Music Paused`);
    }

    stop(): void {
         console.log(`Abstract Music Stopped`);
    }
}

const mezbaPlayer2 = new MusicPlayer2()

mezbaPlayer2.play()
mezbaPlayer2.pasue()
mezbaPlayer2.stop()