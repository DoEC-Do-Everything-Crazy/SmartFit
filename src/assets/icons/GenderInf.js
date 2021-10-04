import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
export const GenderInf = props => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h24v24H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.04167)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={24}
          height={24}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABT0lEQVRIDdWUPU4DMRCFnYgaIaGl4ADcI+IASEhRECeg4QjAmbgAPykp6ZBQeirET0fI8r1oR3IGhvUmoSB6zzPjeR7ba8cp/ZPfmHXWjh/Eqa/mj7ix7rq7FHyA+U4I27GD5ALewaeG8s/wKyjkxZWr6RQxv+OY9DuU+Ce+kTuBtnIV3yI2LW6MIakZNHGbvUdbQeGa5gqGkPCFbF1I3Zg9tN8Q3aJTlJvQMMDpOe4TG3RjjizIbTTBQS7Cn0IP3+fHeP1CrMMr/Tyme12o0ATRDpr06iaaYOJKD4h7jvkZkEqPajyjCS6dcOpihb7Pj5EmZNdr+kylbdgJQ9QzaIcYWWkO0S2FkqditFTlbFD+2Nku9Oaco6ngWmETFBeNblFxgTZh6QRjCmn1mDnk3869lqbfko/S+g98RslV+rVysbiGntliMcKblFKnCb4AYDiArJ7Q4TkAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
};
