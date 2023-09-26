import { create } from "zustand";
import song_graphic from "../asset/song_graphic.json";
import song_infomation from "../asset/song_infomation.json";
import song_keywords from "../asset/song_keywords.json";

interface KeywordStore {
  keywordList: string[];
  currentSong: SongData;
  spacePosition: any;
  playerState: boolean;
  isSearchMode: boolean;
  isMobile: boolean;
  playerToggle: boolean;
  selectKeyword: (keyword: string) => void;
  deleteKeyword: (keyword: string) => void;
  setCurrentSong: (data: SongData) => void;
  resetKeyword: () => void;
  selectResult: (title: string) => void;
  resetSpacePosition: () => void;
  setSearchMode: () => void;
  setMobileState: (state: boolean) => void;
  setPlayerToggle: (state: boolean) => void;
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
  spacePosition: {},
  playerState: false,
  isSearchMode: false,
  isMobile: false,
  playerToggle: false,
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
    set((state) => ({ spacePosition: {} }));
  },
  selectResult: (title: string) => {
    const info: any = song_infomation.find((item) => item.song_title === title);
    const pos: any = song_graphic.find((item) => item.song_title === title);
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

    const widthOffset = 1000 - pos.x;
    const heightOffset = 1000 - pos.y;

    const posData = {
      transform: `translate(${widthOffset * 1.5}px, ${
        heightOffset * 1.5
      }px) scale(1.5)`,
    };

    const data: SongData = {
      album_title: info.album_title,
      embedcode: info.embedcode,
      recommend: info.recommend,
      release_date: info.release_date,
      song_title: info.song_title,
      keywords,
    };
    set((state) => ({ currentSong: data }));
    set((state) => ({ spacePosition: posData }));
    set((state) => ({ playerState: true }));
  },
  resetSpacePosition: () => {
    set((state) => ({ spacePosition: {} }));
  },
  setSearchMode: () => {
    set((state) => ({ isSearchMode: !state.isSearchMode }));
  },
  setMobileState: (windowState) => {
    set((state) => ({ isMobile: windowState }));
  },
  setPlayerToggle: (playerState) => {
    set((state) => ({ playerToggle: playerState }));
  },
}));

export default keywordStore;
