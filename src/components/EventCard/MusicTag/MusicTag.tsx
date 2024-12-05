import { Chip } from "@nextui-org/react";

import { findTagStyles } from "../../../helper";
import { Music } from "../../../types";

interface MusicTagProps {
  musicList: Music[];
}

export default function MusicTag({ musicList }: Readonly<MusicTagProps>) {
  return (
    <div className="flex flex-wrap justify-center">
      {musicList.map((music, index) => {
        const tagStyles = findTagStyles(music);

        if (!tagStyles) {
          return null;
        }

        const { name, bgColor, shadowColor } = tagStyles;

        return (
          <div className="flex-col" key={index}>
            <div>
              <Chip
                aria-label={name}
                variant="shadow"
                classNames={{
                  base: `mt-5 mx-1 ${bgColor} border-small border-transparent/50 ${shadowColor}`,
                  content: "drop-shadow shadow-black text-white",
                }}
              >
                {name}
              </Chip>
            </div>
            <div className="flex text-sm mt-1 justify-center text-default-500">
              {music.percentage}%
            </div>
          </div>
        );
      })}
    </div>
  );
}
