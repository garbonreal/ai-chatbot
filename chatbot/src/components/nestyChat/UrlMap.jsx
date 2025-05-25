// useLoadUrlMap.ts
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { urlMapAtom } from "../../states";

const urlMapPath = "../../../public/url_map.txt"

let loaded = false;

export const useLoadUrlMap = () => {
  const setUrlMap = useSetRecoilState(urlMapAtom);

  useEffect(() => {
    if (loaded) return;

    const fetchUrlMap = async () => {
      try {
        const res = await fetch(urlMapPath);
        const text = await res.text();
        const lines = text.split("\n");
        const map = {};

        lines.forEach((line) => {
          const [key, val] = line.split(' ').map((s) => s.trim());
          if (key && val) {
            map[key] = val;
          }
        });

        setUrlMap(map);
        loaded = true;
      } catch (err) {
        console.error("Failed to load url_map.txt:", err);
      }
    };

    fetchUrlMap();
  }, [setUrlMap]);
};

export default useLoadUrlMap;