import { Progress } from "@nextui-org/react";

import { findTagStyles } from "../../helper";

import type { Music } from "../../types";

interface PercentageProps {
  musicList: Music[];
}

export default function Percentage({ musicList }: Readonly<PercentageProps>) {
  return (
    <span className="flex justify-center items-center mt-4 px-0 h-auto w-full rounded-lg overflow-hidden sm:w-3/5">
      {musicList.map((music, index) => {
        const tagStyles = findTagStyles(music);

        if (!tagStyles) {
          return null;
        }

        const { bgColor } = tagStyles;

        const progressPercentage = music.percentage || 0;

        return (
          <span
            key={index}
            className="h-auto flex-none"
            style={{ width: `${progressPercentage}%` }}
          >
            <Progress
              radius="none"
              value={100}
              classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border-transparent",
                indicator: `${bgColor} border-transparent`,
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
              }}
            />
          </span>
        );
      })}
    </span>
  );
}
