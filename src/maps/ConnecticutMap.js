import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

import {useMap} from './Utils';

const useStyles = makeStyles((theme) => ({
  svgGroup: {
    cursor: 'pointer',
  }
}));

function ConnecticutMap(props) {
  const {svgElementProps, unselectedCountyColor} = useMap(props);
  const classes = useStyles();
  return (
    <svg viewBox="-8090 -3909 16242 11839" width='100%'>
      <g
        className={classes.svgGroup}
        fill={unselectedCountyColor}
        stroke='#FFF'
        strokeLinejoin="round"
        strokeWidth={25}
      >
        <path
          id="CT_Fairfield"
          d="M-6382 1939l79-1113 12-179 17-264 2-50 108 15 21 50 46 30 41-25 31 91 46 60-92 36-11 40 6 15-16 10 72 232 78 186 273 847 21 121-5 242 470-248 26 40-36 51 82 50 26 146 139 80 189 71 77 70 118 25 21-15 51-31 41 20 10 56-20 66 5 85 15 30 31 10 92-45 41-10 41 10 52 90 10 76 21 25 46 10 61-51 51-15 21 36 5 85 16 20 30 5 77-40 72 10 25 45 113 106 11 30 112 50 11 71-26 50 41 70 77 81 128 10 6 65 154 181 10 81 21 30 82 50 82 161 195 126 62 81 51 20 10 45 98 90 10 61-30 55-123 91-46 101 16 192-10 35-26 56-97 75-66 111 21 126-26 81 11 101-71 131-31 25-5 31 5 85 113 91-10 25v65l57 40 20 31-10 25-36 15-82 15-41 16-51 10-77 5-66-10-57-50 16-20 46 10 35-26-15-45-41-5-36 20-51-10-36-35-5-25-5-30-11-46-46 26-56-20-36-46-46 21v35l26 30 15 30 5 36-5 15-25 5-67 35-66 61-62 96h-20l-10-15v-36l20-35 20-40 46-61v-45l-20 5-118 76-30 70-67 56-36 15-41-15-15 25-31 71-15 55-25 26-57 35-30 25-62 46-35 5-36-15-36-25-26-25-61-56-62 31-46 55-25 20-62 36h-77l-61 35-15 31h-26l-61-25-52-10-25 60-61 46-165-71-15 76 52 25 30 5-5 40-66 11-67 15-51 56-25 50-36 20 5-55-21-51-15 16-5 30-10-5-21-15-5-31-21-35-20 10-26-10 11 46-5 60 30 30v41l21 30-36 35-66-25-26-5-15 40-10 56-26 25-20 20-16 10-31-30 1 111-26 5-25-5-21-35-46-20-21 50-87 31 5-61-56 5-10 61-46 116-41 25-10-5-26-91-56 66-26-50-20-66-52-35h-36l1 71v65l-21 56-46-5h-71l5 55 26 41-11 50-5 35-56 10-21-30-5-15-10-35-5-30-26-36-82-10 10 56-15 65-76 31-36 70-31 26-20 30-16 40-46 46-71 20-51-5 20-61 72-35 46-50-11-36v-40l-31-30-30 10-21 66-61 30-21-20-15-20v-46l-11-35-30-25-36 60-10 46-26 10-25 45-31 15-15-10-93 6 11 35-16 45-35 26-57-10-20-21-57-5-25 76-26 25-30 41-10 5-10 110-24-45v-15l1-14v-11l2-36-5-20v-20l1-25 6-30 8-25 3-7 6-18 11-36 1-24-83-152-73-118-445-726 776-461 1300-769-71-108-176-274-319-509 63-782 12-140 104-1346z"
          {...svgElementProps('Fairfield')}
        />
        <path
          id="CT_Hartford"
          d="M2130-3723l147 969-113 15-66 10-38 979 179-36-80 560 92-15 169-16 89 701 115 690 31 171 154 106 118 247 11 55 36 45 15 66-20 262-40 86-15 35-410 72-87-176-42-86-195-433-1044 155 20-81-481 97-235 46-15 41 36 70-26 96-10 40-122 41-10 66-174 35v152l-404 66-71 121-77 86-61-15 4-95-35 20 15-96-174 41 36 252-199-50-6-46-25-15v-25l-16 5-5-30-41-45-41-5-517 77 106-570-42-403-368 51-193-1230-47-292-26-151-10-91 148-21 414-66 16-61 5-20 86-298-51-30-72 5-21-65v-71l56-187 5-30 51-232 209-16 188-681 20-71 25-96-450 22h-97l-384 26-250 21 55-247 15-71 107-487 329 12 241 7 338 1 691 4-11 236-11 205 410-71 43-212 32-29 19-30 6-30-7-53 411-10 228 22 334 38 252 9 20 61h25l160 4 95-59 388-55z"
          {...svgElementProps('Hartford')}
        />
        <path
          id="CT_Litchfield"
          d="M-2359-3786l28 1 64 1 264 10-107 487-15 71-55 247 250-21 384-26h97l450-22-25 96-20 71-188 681-209 16-51 232-5 30-56 187v71l21 65 72-5 51 30-86 298-5 20-16 61-414 66-148 21 10 91 26 151 47 292 193 1230-138 96-36 25-148 16 20 141-143-10-189 97-15 60 26 141-179 11-26 5-5 20-82 167-327 106-112 26-164 5 36 242 37 242-405 61-317-54-67 5-578 77-20 55-6 5-40 81 20 30-20 56 62 100 77 81-21 15-118-25-77-70-189-71-139-80-26-146-82-50 36-51-26-40-470 248 5-242-21-121-273-847-78-186-72-232 16-10-6-15 11-40 92-36-46-60-31-91-41 25-46-30-21-50-108-15 61-871 34-497 57-837 27-332 80-1004 4-101 21-600 1028 7 261 15h10l164 5 214 10 52 2 1217 51 660 33z"
          {...svgElementProps('Litchfield')}
        />
        <path
          id="CT_Middlesex"
          d="M119 1342v-152l174-35 10-66 122-41 10-40 26-96-36-70 15-41 235-46 481-97-20 81 1044-155 195 433 42 86 87 176 196 453 108 211 466-61 123-16 10-5 82-10 36-1 174-20 5 171 68 449 26-1 58 469-450 62-369 67-205 21-51-10 72 136 6 105-15 51 15 45 72 50 123 5 133 30 113 181-25 25-31 46v40l-20 10-16-5-20-25-26-76-25 51 5 20v25l26 30 10 31 5 25 5 15v50l6 41 41 45 87-26 56 35 41 61 16 40 5 40 26 56-15 96v100l-25 76-62-10-15 56 10 35h21l36-10 51-1 31 26 15 30-5 15-77 25-71-10-21 41-10 35 10 15h21l82-25 66-1 26 16 10 45h-15l-31 5-46 5-97 51-51 5-41-15-51 26-36 20-21-25-15-41-15-30-16-50-46-45-57-5h-51l-46 10-25 10-31 6-51-10-67-15-36-10-72 15-51 41-46 50-30 25-51-20-77-14-62 25-61 25-31 26-20 25-10 45-21 20-35-10-47-20-5-20-5-25 5-45-21-25-30 40-21 15-15 10-41 21-15 35-5 35-77-60-21-40 16-41 10-60v-20l-16-56-21-15-46 10-25-15-11-30-20-35-36-50-52-61-41-50-36-30-41-50 5-36v-60l-5-66-46 16-46-66-72 11h-56l-6-20-10-121 20-31-11-191 31-56 10-25-10-65-42-81 16-60-47-51-66-70-31-45-21-121-46-5-62-25-20-10-21-25 5-46 56-81-25-20-31-50-31 10-15-40-717 158-51 10 61-166 45-524-82 25z"
          {...svgElementProps('Middlesex')}
        />
        <path
          id="CT_New_Haven"
          d="M119 1342l75 1063 82-25-45 524-61 166 51-10 717-158 15 40 31-10 31 50 25 20-56 81-5 46 21 25 20 10 62 25 46 5 21 121 31 45 66 70 47 51-16 60 42 81 10 65-10 25-31 56 11 191-20 31 10 121 6 20h56l72-11 46 66 46-16 5 66v60l-5 36 41 50 36 30 41 50 52 61 36 50 20 35 11 30 25 15 46-10 21 15 16 56v20l-10 60-16 41 21 40 77 60-10 41-26 15-41 15-25-35-47-50-51-61-72-60-72-30-66-5-72 15-82-9-51 5-46-20h-92l-36 20-41 11-51 20-82 15-41-5-67-45-20 30-31 11-31 20-15 65v26l-30 20-26-15-26 50-15 36-10 10h-56l-16-10-20 20-56 15-31-50 46-40 5-21 5-25-16-25-41 25-51 16-30-20-31-15-92 40-16-55-31-10-51 20-30-10-11-30v-35l-41-26-31 16-66 15-36 10-61-10-52 10-40 51-31 5-31 15-56 21-31 60h-30l-31 15-21-15v-30l41-40 21-15 5-36-21-15-82 10-46-20-10 46-15 45-21 51-20 15h-10l-16-20-15-40-10-31-57 16-61 80-51 41-62 5-40 15-26 10-82-9-41 10-31-20-66-41 15-55 51-40 5-31-21-50-15-25-21-10-15-41 5-60-5-86 4-50 16-45 66-36 36-106-31 30-77 26-102 61-30 45-31 51-107 70-21 66 103 25 10 15-15 25-41 41-26 35-30 30-149 51-92 71-61 111-41 40-56 5-31-5-15 51-36 66-92 40-5 35-20 41-20 35-16 25-20 20-21 16-35 10-21-30-72 10-46 5-20 30-41-35-16-25-25-15-21-20-15 5-21 10-10 5-25 30-11 31-20 25-10 30-26 25-92 26-66 61-72 95-56 91-51 26-113-91-5-85 5-31 31-25 71-131-11-101 26-81-21-126 66-111 97-75 26-56 10-35-16-192 46-101 123-91 30-55-10-61-98-90-10-45-51-20-62-81-195-126-82-161-82-50-21-30-10-81-154-181-6-65-128-10-77-81-41-70 26-50-11-71-112-50-11-30-113-106-25-45-72-10-77 40-30-5-16-20-5-85-21-36-51 15-61 51-46-10-21-25-10-76-52-90-41-10-41 10-92 45-31-10-15-30-5-85 20-66-10-56-41-20-51 31-77-81-62-100 20-56-20-30 40-81 6-5 20-55 578-77 67-5 317 54 405-61-37-242-36-242 164-5 112-26 327-106 82-167 5-20 26-5 179-11-26-141 15-60 189-97 143 10-20-141 148-16 36-25 138-96 368-51 42 403-106 570 517-77 41 5 41 45 5 30 16-5v25l25 15 6 46 199 50-36-252 174-41-15 96 35-20-4 95 61 15 77-86 71-121z"
          {...svgElementProps('New Haven')}
        />
        <g id="CT_New_London">
          <path
          {...svgElementProps('New London')}
            d="M8152 619v15l-5 439-2 171 3 166-38 1311-9 358-21 32-149-43-25 10-26 20-20 16-30 20-31 21-20 10-20 11-16 10-9 20-12 26-5 20 6 25v30l2 26 1 30 18 30 18 20 11 20 10 30 11 30-4 60-10 61-9 46-10 25-5 35 11 35 11 46 23 43 14 32 10 30 1 30-10 35-20 26-35 26-61 45-41 31-97 46-26-106-67-40-51 10-15-55-47-5-71 71-67 20-30 51-31-111-36-15-26 25-10 96-35 10-52-45-30-20-31-30-72 10-36-5-25-30-31 15-31-115-92 10-87 177-5 45-51 101-41-30-41 20-25 36 5 65-25 31-41 5-16-56-26-65v-71l-31-35-25 41 5 35-56 71-36 5-41-15-26-25-30-5-21-10h-25l10-56-16-10-76 56-41 41-51-46-36-15-26-65-21-55-10-76-16-141-6-146-62-131v-121l-5-15-16-30-10-25-41 75 6 71v76l26 146-10 65-5 66-20 60-10 25v51l46 70 31 66 5 65-15 71-30 45-67 41-82 30-76 1-46 5h-52l-41-15-25-10-36-40-31-60-51-15-36 40 5 35-36 26-46-61-10-55-47-55-41 5-41-10-56 10-71 61-5 60v86l21 141-41 30-41-4-10-46-57-35-46-65-61 25-31-25-113 21-5 50-35 46-72 65-51 6-62-15-163 51-154 25h-72l-20-4-5-56-6-25-5-20-5-25-10-15-21-16-10-15-21-30-30-5-16-40-41-40-10-76 15-85 25-116-26-101-72-65-31-21-46-9-36-15-20-41-21-25-26-85 10-81-113-181-133-30-123-5-72-50-15-45 15-51-6-105-72-136 51 10 205-21 369-67 450-62-58-469-26 1-68-449-5-171-174 20-36 1-82 10-10 5-123 16-466 61-108-211-196-453 410-72 15-35 40-86 83 70 133 70 25-75 31-10 15-61 77 15 51 15 67 5 82-6 122-71 36-146-47-121-36-156 250-117 209-202 77 10 21-36 5-25-6-15-20-91-47-45V64l52 5 35 10 21-71 46-30 35-21 16-15 30-30 5-51 21-10 25-25 539 502 154 126 26-86 25-10 410 74h20l1230 262 782-118z"
          />
          <path
            d="M6712 4087v41l-15 25-36-20-26-25-16-30 26-46 5-65 25 10 41-21 11 41z"
          />
        </g>
        <path
          id="CT_Tolland"
          d="M5224-3693l278 12 28 779-639 3-333 11 3 928 2 439 440 3 75 903-10 20h-98l-41 5-31-50-51-5-35 21-11 50-30 61-20 55 5 45 36 26-5 25h-46l-5 30-461 2 5 45 26-5 15 10 21 30v36l41 40-25 25-21 10-5 51-30 30-16 15-35 21-46 30-21 71-35-10-52-5v30l47 45 20 91 6 15-5 25-21 36-77-10-209 202-250 117 36 156 47 121-36 146-122 71-82 6-67-5-51-15-77-15-15 61-31 10-25 75-133-70-83-70 20-262-15-66-36-45-11-55-118-247-154-106-31-171-115-690-89-701-169 16-92 15 80-560-179 36 38-979 66-10 113-15-147-969 290 5h222l817 16 338 9 123-2 506 3 793-1z"
          {...svgElementProps('Tolland')}
        />
        <path
          id="CT_Windham"
          d="M5502-3681l173 7 650-9 221 13 55 3 216 9 480 7 717 9 11 166 13 556 5 236 7 213 34 1143 39 1025 10 322 19 600-583-43-782 118-1230-262h-20l-410-74-25 10-26 86-154-126-539-502-41-40v-36l-21-30-15-10-26 5-5-45 461-2 5-30h46l5-25-36-26-5-45 20-55 30-61 11-50 35-21 51 5 31 50 41-5h98l10-20-75-903-440-3-2-439-3-928 333-11 639-3z"
          {...svgElementProps('Windham')}
        />
      </g>
    </svg>
  );
}

export default ConnecticutMap;
