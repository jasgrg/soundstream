// List your music files here
// Add files to public/music/ and list them here to display on the website

export interface MusicFile {
  id: string;
  title: string;
  artist?: string;
  filename: string;
}

export const musicLibrary: MusicFile[] = [
  {
    id: "1",
    title: "Juice WRLD type beat",
    artist: "King Otis",
    filename: "juice WRLD type beat.mp3",
  },
  {
    id: "2",
    title: "Demon",
    artist: "King Otis",
    filename: "Demon.mp3",
  },
  {
    id: "3",
    title: "Desert",
    artist: "King Otis",
    filename: "Desert.mp3",
  },
  {
    id: "4",
    title: "Ascent",
    artist: "King Otis",
    filename: "Ascent.mp3",
  },
  {
    id: "5",
    title: "High Fashion",
    artist: "King Otis",
    filename: "High Fashion.mp3",
  },
  {
    id: "6",
    title: "Jersey club type beat",
    artist: "King Otis",
    filename: "Jersey club type beat.mp3",
  },
  {
    id: "7",
    title: "Memos",
    artist: "King Otis",
    filename: "Memos.mp3",
  },
  {
    id: "8",
    title: "Munchies",
    artist: "King Otis",
    filename: "Munchies.mp3",
  },
  {
    id: "9",
    title: "Red",
    artist: "King Otis",
    filename: "Red.mp3",
  },
  {
    id: "10",
    title: "Watch Me Work",
    artist: "King Otis",
    filename: "Watch Me Work.wav",
  },
  {
    id: "11",
    title: "Drake type beat",
    artist: "King Otis",
    filename: "drake type beat.mp3",
  },
  {
    id: "12",
    title: "Kendrick Lamar type beat",
    artist: "King Otis",
    filename: "kendrick lamar type beat.mp3",
  },
  {
    id: "13",
    title: "Knuckles 2",
    artist: "King Otis",
    filename: "knuckles2.mp3",
  },
  {
    id: "14",
    title: "Lama Lama Rap Beat",
    artist: "King Otis",
    filename: "lama lama rap beat.mp3",
  },
];
