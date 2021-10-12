import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';
export const Food = props => {
  const {color} = props;
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.63 25.787a.709.709 0 00.282.525c.891.683 3.017.926 4.713.926.181 0 .366-.002.55-.008a.713.713 0 00-.043-1.424c-.169.005-.34.007-.507.007-1.815 0-3.033-.262-3.584-.492l-.566-17.43c.18.068.377.131.59.19 1.054.29 2.442.45 3.91.45.4 0 .796-.012 1.18-.035l-.281 9.23a.713.713 0 101.424.043l.287-9.42c.47-.07.909-.16 1.3-.268.214-.059.41-.122.592-.19l-.207 6.603a.712.712 0 101.425.045l.253-8.1.002-.07c0-.605-.441-1.095-1.31-1.456a.713.713 0 00-.547 1.315c.13.055.225.104.295.145-.286.17-.882.376-1.76.527L8.813.897A.713.713 0 107.387.854L7.284 4.25a19.438 19.438 0 00-1.31-.044c-1.467 0-2.856.16-3.91.45C.7 5.035.005 5.608 0 6.363v.013c0 .02 0 .04.002.06l.627 19.327.002.025zM5.976 5.633c.431 0 .855.014 1.265.044l-.042 1.389c-.378.026-.786.04-1.223.04-2.381 0-3.91-.43-4.42-.737.51-.306 2.039-.736 4.42-.736zM3.27 17.197a.713.713 0 111.007-1.008l.26.259a.713.713 0 11-1.008 1.007l-.26-.258zM16.45 8.252c.113-.807.534-1.654.94-2.472.954-1.923 1.119-2.595.29-3.054a.713.713 0 01.691-1.246c.959.53 1.386 1.38 1.236 2.455-.112.81-.534 1.658-.94 2.478-.952 1.916-1.117 2.586-.296 3.04a.712.712 0 01-.69 1.247c-.956-.53-1.381-1.376-1.23-2.448zM9.93 28.65a.713.713 0 01-.543.85c-.99.217-2.284.337-3.646.337-1.868 0-4.208-.239-5.171-.91a.713.713 0 11.814-1.17c.456.318 2.137.655 4.357.655 1.262 0 2.448-.108 3.34-.304a.713.713 0 01.85.542zm19.538-8.571a.712.712 0 00-.607-.16c-.545.11-1.104.21-1.674.302a2.969 2.969 0 00-.462-.595L25.47 18.37a6.487 6.487 0 003.083-2.127c1.694-2.104 1.922-4.96.57-7.11a.712.712 0 00-.361-.29c-2.388-.863-5.13-.03-6.824 2.073-1.578 1.96-1.885 4.573-.825 6.66l-.148.183a.712.712 0 101.11.894l.148-.184c.497.13 1.006.19 1.513.183l1.805 1.805a60.24 60.24 0 01-7.546.462c-2.6 0-5.157-.158-7.546-.462l6.439-6.44a1.576 1.576 0 011.864-.262.712.712 0 10.686-1.249 3.008 3.008 0 00-3.558.504l-6.614 6.615c-.18.18-.335.38-.462.595-.57-.092-1.13-.193-1.674-.302a.713.713 0 00-.852.738c.21 3.796 3.326 6.957 7.635 8.2a.712.712 0 00.661.98h6.842a.713.713 0 00.66-.98c4.31-1.243 7.426-4.404 7.636-8.2a.712.712 0 00-.245-.578zm-6.228-2.87l2.855-3.546a.712.712 0 10-1.11-.894l-2.855 3.545c-.476-1.47-.152-3.174.919-4.503 1.256-1.56 3.235-2.225 4.995-1.705.884 1.609.656 3.684-.6 5.244-.884 1.098-2.126 1.752-3.398 1.862-.053-.002-.59.017-.806-.004zm1.964 8.57c-1.94 1.432-4.5 2.22-7.208 2.22-2.709 0-5.269-.788-7.208-2.22-1.584-1.168-2.61-2.662-2.96-4.278a48.475 48.475 0 001.312.215c2.767.414 5.784.63 8.856.63s6.09-.217 8.857-.63a47.71 47.71 0 001.312-.215c-.35 1.616-1.377 3.11-2.96 4.278zM5.117 14.645a.71.71 0 01-1.008 0 .713.713 0 010-1.008l.26-.258a.712.712 0 111.007 1.007l-.26.26zM3.278 11.54l-.258-.26a.713.713 0 111.007-1.007l.26.26a.713.713 0 11-1.009 1.007z"
        fill={color}
      />
    </Svg>
  );
};
