import { create } from "zustand";
import song_graphic from "../asset/song_graphic.json";
import song_infomation from "../asset/song_infomation.json";
import song_keywords from "../asset/song_keywords.json";

interface KeywordStore {
  keywordList: string[];
  currentSong: SongData;
  selectKeyword: (keyword: string) => void;
  deleteKeyword: (keyword: string) => void;
  setCurrentSong: (data: SongData) => void;
  resetKeyword: () => void;
  selectResult: (title: string) => void;
}

interface SongData {
  album_title: string;
  embedcode: string;
  recommend: number;
  release_date: string;
  song_title: string;
  keywords: string[];
}

const keywordStore = create<KeywordStore>((set) => ({
  keywordList: [],
  currentSong: {
    album_title: "앨범 제목",
    embedcode: "-",
    recommend: 0,
    release_date: "0000.00.00",
    song_title: "곡을 선택해주세요.",
    keywords: ["-", "-", "-", "-", "-", "-"],
  },
  selectKeyword: (keyword: string) => {
    set((state) => ({ keywordList: [...state.keywordList, keyword] }));
  },
  deleteKeyword: (keyword: string) => {
    set((state) => ({
      keywordList: state.keywordList.filter((item) => item !== keyword),
    }));
  },
  setCurrentSong: (data: SongData) => {
    set((state) => ({ currentSong: data }));
  },
  resetKeyword: () => {
    set((state) => ({ keywordList: [] }));
  },
  selectResult: (title: string) => {
    const info: any = song_infomation.find((item) => item.song_title === title);
    const targetSong: any = song_keywords.find(
      (item) => item.song_title === title
    );
    const keywords = Object.values(
      Object.fromEntries(
        Object.entries(targetSong).filter(
          ([key]) => key.includes("emotion") || key.includes("theme")
        )
      )
    ) as string[];

    const data: SongData = {
      album_title: info.album_title,
      embedcode: info.embedcode,
      recommend: info.recommend,
      release_date: info.release_date,
      song_title: info.song_title,
      keywords,
    };
    set((state) => ({ currentSong: data }));
  },
}));

export default keywordStore;
