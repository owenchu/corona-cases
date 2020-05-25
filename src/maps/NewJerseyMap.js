import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

import {useMap} from './Utils';

const useStyles = makeStyles((theme) => ({
  svgGroup: {
    cursor: 'pointer',
  }
}));

function NewJerseyMap(props) {
  const {svgElementProps, unselectedCountyColor} = useMap(props);
  const classes = useStyles();
  return (
    <svg viewBox='-8038 -13966 14262 26999' width='60%'>
      <g
        className={classes.svgGroup}
        strokeWidth={22}
        strokeLinejoin='round'
        fill={unselectedCountyColor}
        stroke='#FFF'
        strokeMiterlimit={1}
      >
        <g id='NJ_Atlantic' {...svgElementProps('Atlantic')}>
          <path
            d='M-879 4083l139 116 379 311 52 66 36 40 5 30 5 45 21 41 36 70 5 50-21 56-10 50 16 86-16 60 11 70 25 20 21 46 36 15 31 25h20l26 10 20-10 16-20h15l10 15 6 20-6 30 16 15 20-15 52-55 30 15 113 50 134 100 123 136 103 15 51 15 41 15 31 15 36 60 154 111 20 25 11 60 20 5 26-30 20-5 31 20 20 15 21 15 15-5 36 10 21 36 41 25 26 55 15 10 46-20 21 5 20 25 46 30 41-10 31-20 36-5 15 25 6 30 10 30 20 10h6l20-10 5-45 5-56 16-15 30 5 21 20v10l-21 66 16 60 51 41 52-6 10-50-47-70-10-31 57-15 46 35 46-40 31-25 15 40 21 71 10 70 36 96-41 15v35l-5 116 87 95-5 91 42 70 133 126 26 70-31 41-61-15-21-51-87-10-46 56 15 35 57 5 51 90-15 41h-52l-20 40 15 60 36 51 47 95-72 46-41 30-51-40-26-40-36-56-26-75 10-41v-10l-25-5-82-9-11-41-46-5-20 25 10 71-25 50-67-5-36 61-5 171-36 70-128 41-30 35 25 126 1 116 51-46 82-25 87-10 97 30 47 30v30l-11 30 6 21h10l20-1 52 10 20 16 11 35-11 25-5 20 11 10 56 10 31 5 20 20 11 40 10 36 5 20 5 25v10l5 15-56 45-108 66-107 71-92 55-77 30-103 41-87 30-72 51-76 70-72 51-46 30-36 40-41 46-36 15-36-5h-20l-16-10 5-20 21-51 25-25 31-35 15-35 16-46v-50l10-30 5-36 36-15 46-25 26-15 30-25 21-20 25-26 6-5 10-40h-26l-26-30 57-30 56-66v-15l5-25-5-66-10-25-57-30-97-5-31 5-87 41-10 75-21 126-35 25-41 56-5 100-52 6-36-21-61-40-31 15-20 41-52 111 36 70 16 65-41 51-56 60-72 5-72-40-154-10-77 46-72 5-51-30-31-36-25-4-36 35-26 35-36-10-46-30-56-30-57 55 47 35 41 66-41 55-5-25v-30l-26-35-31 5-20 5-26 15-15 20-6 15-25 30h-5l-5-20v-15l-16-35h-5l-10 5-26 20-26 5-25 10-26 10-15 11-31 10h-31l-15-15-10-15-26-11-15 11h-11l-10-10h-15l-10 15-26 15-26-5-15-25-21-25h-31l-20-10-41-11-31 6-36 10-61 10-41 20-26-25-10-30-16-20-20 20-26 20-31-20-56-15-31 10-10-10v-25l5-25-56-15-31-11-26 11-15 15-21-5-15-20-31-5-15-5h-5l-36 30-87-15-67 10-41-15-26-20-36-61-36-5-82-25-51-10-36-25-26-75v-106l15-166 31-111 30-80 16-46 5-50v-40l-5-30-11-41-15-35-16-35-10-30 5-40 11-21 15-35 5-20 10-30v-40l-15-36-5-30-6-75-1098-1006 931-1032 425-479 574-635z'
          />
          <path
            d='M2366 6857l128 9 61-5 47-10 46 5 30 5 11 50 10 31 16 30 20 25 15 5 42-10 15-35 41 4-5 56-15 60v41l-5 45-31 30-41 20h-57l-35-15h-31l-26 16v60l5 25 26 20 10 61-15 45-25 65-57 96-71 91-57 50-87 51-107 65-72 61-123 75-31 16-25 20-21 10-10-45-16-31-30-10-47-35-15-20-10-30-6-45v-10l16-31v-15l30-15 11 5 30 20 11 20 20 25 36 5 41-30 51-96 16-10 31-20 46-15 25-10 21-15-16-25-25-15-36-10-16-5 11-31 25-40 26-45 36-20 41-16 30-25 5-15 21-40 10-51v-70l-5-60-16-46-25-45-21-40-10-35 5-31-5-20 10-10 31 20h41l15-15-21-30 11-20z'
          />
          <path
            d='M1613 7517l-16-15-5-25 16-15 30-26 21-20 25-10 16-10h10l21 30-5 56-11 55v20l31 15 21 20 5 36-10 35-46 25-46 15-21 15-36 26h-36l-20-21-5-35 10-30 25-50 16-26 10-25z'
          />
          <path
            d='M1900 7592l-5 25v20l-15 21-36-10-10-26-6-30-10-40 5-35 26-5 25 10 11 10 15 25z'
          />
          <path
            d='M784 8832h-26l-10-10-15-20v-46l15-30 26-35 20-20 15-20 36-26 5 5 16 21-15 70-21 40-20 41z'
          />
        </g>
        <path
          d='M6224-9981l-22 174-23 92-56 227-33 135-58 222-34 131-50 135-54 155-14 41-106 279-115 268-13 29-50 117-57 110-66 116-15 26-36-21 10-35-108-116-51-20-57-75-20-5-46 50-62 16-36 45-71 40-87 11h-16l-102 45-87 81-87 101-25 96 25 70-10 66-46 25-41-10-20-30 5-111-6-25-97 20-82 66-36-10-30-66-31-30-41-55-62-15 26-71 51-91-5-50-1-50 31-81 15-35 41-16 16-5 15-15 5-10 10-30 5-10v-10l5-20v-36l-5-10-25-60 15-101v-35l-5-35 5-41 30-10 5-5 11 10 36 61 30-36-46-181-36-55-5-5-36-51h-5l-5-5-11-5-5-5-10-5-10-10-5-10-6-15-15-101-5-10-5-15v-10l-1-25 5-106 11-71v-25l-11-25-10-5-21-5-35-15-16-25v-15l5-15 10-16 6-5 5-15v-10l-5-10-21-40-10-25-11-5-10-5h-15l-21-20 5-21 16-15 10-10 15-75 26-41 5-35 15-35-46-41-36-20-108-85-25-20-31 5-41 55-210-29-82-10-143-10-98-45-108-96-15-25-36-50-20-36-11-25-46-100-21-21-36-35-15-10 20-55 11-26 61-156 56-151 10-15 26-71 5-20 5-15 10-25 20-46 11-20 25-75 10-16 36-100 41-106 15-36 82-211 56-147 502 271 1086 634 203 123 138 76 663 379 35 19z'
          id='NJ_Bergen'
          {...svgElementProps('Bergen')}
        />
        <path
          d='M-783-579l41 10 51-35 16-30 51-91-26-25-15-20 5-25-11-25-10-20-5-21v-25l20-25 16-15 15-5h41l31 20 26 25 20 10 41 5 41-5h26l31 20 5 20 5 10v35l-21 36 26 15h62l71 50 108 50 72 55 103 25 20 36v45l16 15 179 40 72-10 10-5L566 4l93 176 25 55 10 20 16 40 10 21 41 95 6 10 41 106 67 141 20 40 77 241 72 161 26 56 5 15v10l11 15 5 20 25 56 6 20 10 25 20 45 11 25 10 25 10 31 52 125 20 66 11 25 15 30 5 15 41 96 11 35 25 65 11 15 10 21 5 20 10 30 47 111 128 291 11 20 72 177 56 140 103 257 16 35 5 10 15 40 31 71 5 15 247 568-39 1395-10 236 1 51v95l-5 81-5 20-5 10-11 20-5 10-5 20-5 5-5 26-15 45v30l-6 20-5 25-15 21-5 25-10 15-41 5-26-5h-15l-21 5-10 10h-16l6 25 15 30v46l-25 15-31 25-46 40-46-35-57 15 10 31 47 70-10 50-52 6-51-41-16-60 21-66v-10l-21-20-30-5-16 15-5 56-5 45-20 10h-6l-20-10-10-30-6-30-15-25-36 5-31 20-41 10-46-30-20-25-21-5-46 20-15-10-26-55-41-25-21-36-36-10-15 5-21-15-20-15-31-20-20 5-26 30-20-5-11-60-20-25-154-111-36-60-31-15-41-15-51-15-103-15-123-136-134-100-113-50-30-15-52 55-20 15-16-15 6-30-6-20-10-15h-15l-16 20-20 10-26-10h-20l-31-25-36-15-21-46-25-20-11-70 16-60-16-86 10-50 21-56-5-50-36-70-21-41-5-45-5-30-36-40-52-66-379-311-139-116-113-90-51-31-57-20-51-45-41-30-10-25-11-30-15-5-31-20-15-21-47-110-61-25-67-91-51-35-77-35-67-15-102-5-67 5-51 5-57 25-77 26-61 10-36 5h-46l-56-10-42-25-25-25-26-25-88-368-139-579-15-80-41-45-31-36-41-35-5-25-26-35-46-50-10-66-16-30-46-70-41-41-77-10-57-30-30-40 5-30 31-15-1-21 26-10 15-10v-25l-30-15-62 10-36-5h-20l-36-5-10-5-26-20-26-5-25-15-21-15-26-10-30-10-16-20 5-20 16-21 10-10 13-22-3-18-20-25-26-60-10-31 20-30 15-25 6-20 5-20 10-20 20-16 11-10-21-25-26-30-10-25-31-25-20-30-26-10-31 5-36-5-20-16-21-15-20 5-31 6-25 5-36 35-77-30 5-10 16-30 15-31 10-35 22-34 12-24 27-28 20-22 31-19 37-19 41-14 42-14 55-18 53-26 20-12 28-20 37-27 4-3 37-28 32-29 9-11 23-29 43-49 21-24 31-24 35-30 23-19 13-11 52-31 64-32 105-69 82-55 40-23 41-9h12l29 1 57-4 31-3 31-9 31-10 36-9 31-9 27-12 41-15 46-15 38-14 31-16 32-13 29-13 31-14 16-15 20-21 14-21 14-22 18-22 21-19 25-18 36-18 31-20 26-21 19-25 10-35 6-45 17-40 10-38 20-33 19-26 21-20 26-10 31-10h35l36 10 47 19 4 2 47 24 29 8 26 5 6 2h26l24-4 21-10 21-16 5-3 21-20 26-19 25-23 31-21 33-14 6-2 25-9 41-5 39-1h28l26-8 37-24 36-29 42-34 40-41z'
          id='NJ_Burlington'
          {...svgElementProps('Burlington')}
        />
        <path
          d='M-3646 1172l77 30 36-35 25-5 31-6 20-5 21 15 20 16 36 5 31-5 26 10 20 30 31 25 10 25 26 30 21 25-11 10-20 16-10 20-5 20-6 20-15 25-20 30 10 31 26 60 20 25 3 18-13 22-10 10-16 21-5 20 16 20 30 10 26 10 21 15 25 15 26 5 26 20 10 5 36 5h20l36 5 62-10 30 15v25l-15 10-26 10 1 21-31 15-5 30 30 40 57 30 77 10 41 41 46 70 16 30 10 66 46 50 26 35 5 25 41 35 31 36 41 45 15 80 139 579 88 368 26 25 25 25 42 25 56 10h46l36-5 61-10 77-26 57-25 51-5 67-5 102 5 67 15 77 35 51 35 67 91 61 25 47 110 15 21 31 20 15 5 11 30 10 25 41 30 51 45 57 20 51 31 113 90-220 247-574 635-425 479-56-41-67-70v-20l-5-20-5-56-36-20-31-15-20-50-21-96-26-186-15-80-83-136-56-45-16-56-56-50-251-70-123-50-118-71-26-70-113-96-72-20-41-35 5-106v-75l-21-40-66-81-47-60-36-46-10-45-20-40-36-40-31-15-51-41-47-45-25-55-11-10-25-15-16-41v-75l-77-65-41-36v-85l31-61v-90l-6-20 11-61-21-35-56-55-88-51-46-50-61-40-31-66-26-45-46-30-31-20 10-35-25-51-67-40 6-7 25-33 25-40 16-36 10-45 3-16 5-34 1-45-5-30-9-31-14-40-9-31-9-45-9-46-3-46-4-40-4-44 7-40 4-27 13-34 12-25 25-30 33-32 9-10 16-11 47-34 69-44 62-23 36-12 66-21 67-20 57-28 40-32 37-32 31-36 30-33z'
          id='NJ_Camden'
          {...svgElementProps('Camden')}
        />
        <path
          d='M-1991 8579l26 75 36 25 51 10 82 25 36 5 36 61 26 20 41 15 67-10 87 15 36-30h5l15 5 31 5 15 20 21 5 15-15 26-11 31 11 56 15-5 25v25l10 10 31-10 56 15 31 20 26-20 20-20 16 20 10 30 26 25 41-20 61-10 36-10 31-6 41 11 20 10h31l21 25 15 25 26 5 26-15 10-15h15l10 10h11l15-11 26 11 10 15 15 15h31l31-10 15-11 26-10 25-10 26-5 26-20 10-5h5l16 35v15l5 20h5l25-30 6-15 15-20 26-15 20-5 31-5 26 35v30l5 25-31 35 77 26 97-11 88 30 56 20 10 46-15 25-36 116-20 75 10 30 16 5 35-40 52-35 25-15 36-26 26-30 5-30v-30l-11-25-15-20-5-10 5-21 15-30 16-5 15-5 46 35 52 20 56-35 46-30 56-41 31-30 57-20 46-5 25 25 31 60-35 136-52 30-97 36-92 25-98 81-82 90-46 71-25 75-46 111-36 61-41 40-51 40-57 16-35-5-42-5-41 20 1 40-6 25-20 35-21 5-30 1-21 15 16 20 36 10 41 15 15 15-5 55-56 61-36 55-41 66-36 40-20 35-21 61-31 65-15 50-31 46-35 60-41 30-47 26-10 30-20 50-10 30-16 41-20 15-31 20-20 5-16-10-10-20v-56l15-45 10-35 5-35 5-25-10-16-41 11-10 5-26 30v35l-10 45v41l-20 40-128 15-36 40 15 10 36 16 51-1h36l-15 46-10 55v10l10 10 41-10 41-25 87-25 21 5 10 5 21 60v50l-46 66-57 60-41 66-41 70-51 96-41 91-36 60-46 75-56 51-41 35-46 56-26 35-15 10-10 10-36 25-21-100 5-36 5-55 26-45 10-31 21-55 66-20 41-25 26-26 10-25-15-35-26-35-15-20-21-61 5-40 20-45 11-45-11-66-5-25v-15l-5-35-26-35h-20l-36 15-57 10-51 10-66 15-11 50-10 61 67 105 61-55 16-5 21 106 15 65 10 5 16 10 10 40-5 46-10 20-21 20-20 15-46 45-21 41-25 60-21 76-15 60-36 25-56 5-16 15 10 31 11 20 20 30 11 30v25l31 45 30 26 11 35v35l-41 75-72 81-102 81-72 55-72 66-51 60-51 45-52 31-61 40-51 35-21 31-10 15-15 10-31-30 15-71v-45l-15-40-16-36 5-45 21-15 10-10h41l26 30 30-5 47-25 25-20 10-26 6-20 20-40-5-5-21-20-15-20-36-10-62 30-41 15h-41l-30-35-16-5-25 15-11 5v25l21 25 15 31 6 25-11 35-41 20-41-25-41-15-26 20 11 50 5 11 26 10 36 5 30 15 11 30v50l-5 5-57 20-46 10h-31l-97 1-31 35-5 25 36 25 61-5 36-15 11-5 35-5 26-10 31-10 46 10 10 40-41 45-46 30-36 16-20 5-108 35-56 10-92 20-77 21-62 15-87 25-72 5h-61l-47-15h-41l-25-15 10-25 20-45 5-10-35-56-16-35 5-45 57-30 15-46 10-55 5-45-5-26-10-20-11-45 11-30v-25l5-51 10-35 10-25 41-71 15-40 41-101 26-80 15-76 10-50 16-55 51-56 46-60 51-56 46-45 31-91 20-75 16-80 20-66 20-40 62-86 36-85 15-51 5-25 36-60 25-61 11-70-11-96-15-55-11-61 5-55-5-50-20-35-52-51-25-55-36-65-41-36 10-140-21-16-5-25 5-20-46-25-26 10v-25l16-20 10-15-5-5h-26l-21-20v-20l-10-26 15-30 6-30-6-35-5-30v-36l-5-30 5-45 46-40 57-11 46-5 30-15 36-40 57-50 91-755 31-46 30-15 62-60 36-86z'
          id='NJ_Cape_May'
          {...svgElementProps('Cape May')}
        />
        <path
          d='M-3029 6476l1098 1006 6 75 5 30 15 36v40l-10 30-5 20-15 35-11 21-5 40 10 30 16 35 15 35 11 41 5 30v40l-5 50-16 46-30 80-31 111-15 166v106l-20 30-36 86-62 60-30 15-31 46-91 755-57 50-36 40-30 15-46 5-57 11-46 40-5 45 5 30v36l5 30 6 35-6 30-15 30 10 26v20l21 20h26l5 5-10 15-16 20v25l26-10 46 25-5 20 5 25 21 16-10 140-83 1-61-26-57-25-82-60-82-35-82-30-77-5-174 35-108-30-118 5-67 11-41-36 5-40 52-40-36-86-26-25 10-35-15-25-52-20-71 10-21 35-10 30-185 26-123-10-113-15-35 20-21 25-56 5-41 15-11 40-15 56-5 60-25 46-57 25-82 25-20-15-36-35-47-66-51-70-77-45h-46l-5-25 5-36 46-10 26-10 5-40-31-30-31-15v-41l26-40 20-45-5-71-72-115-67-35-41-5-26 25-35 20-26-5-15-55-6-86-25-20-57-25-72-25-71-25-83-61-56-35-41-55 36-15 41-46v-55l-36-20-52-15-41-5 5-66-20-20h-72l-118 1-31 20-15 35-20 45-36 35-46-25-47-60-138-85-16-26-10-30 15-40v-40l-36-91-41-40-15-30-11-56-5-60-25-60-67-26-92-15-16 11-15 5-10 50-21 35h-56l-21-30-72-75-46-51-41-35-46-20-16-30-10-141-36-50v-51l-51-35-11-50 16-41-31 11-72 25v-20l5-20v-46l10-5 41-5v-60l11-25-26-15-10-56-6-25-20-40v-15l5-15 5-36 41-60v-20l-41-15-31-20 5-31 11-15 10-10 10-30v-20l15-20 11-10 5-46v-40l15-35 46-71 26-5 189 40 52 10 46-5 26-50 25-60 87-66 46-80 26-71 31-25 66 10 87-15 62-25 82-106 584-630 1334 1126 16-45v-80l56-131v-26l-5-55-1-35 6-15-47-56 5-25 31-55v-66l5-75 41-111-15-166-6-55 5-41 31-15 15-10 6-5v-15l-11-20 31-76 26-50z'
          id='NJ_Cumberland'
          {...svgElementProps('Cumberland')}
        />
        <path
          d='M3037-8839l57 15 5 6v10l5 10v45l5 10 5 5 21 45 16 10 20 16 87-56 15-66 31-10 21 56 30 60 31 61 77 60 585 442 174 126-15 35-31 81 1 50 5 50-51 91-26 71-25 90-16 16-10 15-5 5-15 30-10 30-6 20-15 21-10 15-5 10-26 70-10 66-5 20v35l10 30 11 31 15 30 5 15 11 15 15 5h41l46-5 10-5 5-5 11-10 5-10 10-16 10-15 5-5 36-20 26-5h71l26 5 15 5 11 5 15 15 5 10v30l-20 96-10 50-10 111 56 76-46 30-41 40-15 46-15 40-31 60-56 46-46 45-113-100-103 20-266-9-41-15-41-91-46-76-103-50-174-35-175-65-118-45-56 5-51 51-72 30-56-25-56-20-36-15-52 10-30-15-139-111-92-60-103-35 41-56 10-50 5-35 31-15 21-16 5-20-26-5-26-10-41-25h-25l-21-10 16-20 25-40v-31l-20-50 5-40 35-56v-156l46-50 31-36 56-20 10-65 21-21 61 5 26-20 25-35v-50l5-46 31-55 5-91 10-45-20-46 25-55 10-40 26-86-5-10-52-35-46-15-10-26 5-50-31-60 36-157-16-65 21-45 25-31 62-10 36 10 15 30 10 15 41-5 31-15 36-10 31 5h20l31 5 5 10 15 15 5 15 11 5 36 10 10 10v15l5 21 31 15z'
          id='NJ_Essex'
          {...svgElementProps('Essex')}
        />
        <path
          d='M-4342 2325l67 40 25 51-10 35 31 20 46 30 26 45 31 66 61 40 46 50 88 51 56 55 21 35-11 61 6 20v90l-31 61v85l41 36 77 65v75l16 41 25 15 11 10 25 55 47 45 51 41 31 15 36 40 20 40 10 45 36 46 47 60 66 81 21 40v75l-5 106 41 35 72 20 113 96 26 70 118 71 123 50 251 70 56 50 16 56 56 45 83 136 15 80 26 186 21 96 20 50 31 15 36 20 5 56 5 20v20l67 70 56 41-931 1032-652-598-247-231-590-533-231-211-118-111-46-5-47 5-46 40-56-10h-15l-67 16-46-15-62-21-20-45-26-45-5-35-11-30-20-21-51-20-62-15-87 20-41 11-56-36-47-40-36-15h-56l-46 15-36-45-10-10-46 15h-26l-5-20-11-30-25-25-41-56-21-35h-20l-36-5-36-30-16-20-20-15-51-5-36-15-26-36-5-35-16-25-35-20-16-20-10-35 5-26 5-35v-20l-5-10-31-81-15-25-36-5-21-70-41-15-46-30-15-31-21-25-5-10-26-5-5-30 26-35 20-25-5-86-31-35-10-46h-26l-41 16-56 5-82 15-20-15 11-11 45-25 6-4 45-26 82-35 41-20-77-69 247-184 147-120 57-60 66-51 51-31 41-24 42-19 15-6 36-11 41-11 51-4h51l62 6 83 16 81 13 58-4 51-6 50-10 56-15 62-18 61-12 60-14 104-37 94-41 63-39 11-7 57-48 63-58 15-23 7-5 17-12 9-5 18-14 29-11 9-1 18-3 36-2 60 7 66 2 59-2 44-10 27-7 5-2 32-23z'
          id='NJ_Gloucester'
          {...svgElementProps('Gloucester')}
        />
        <path
          d='M4105-7616l62 15 41 55 31 30 30 66 36 10 82-66 97-20 6 25-5 111 20 30 41 10 46-25 10-66-25-70 25-96 87-101 87-81 102-45h16l87-11 71-40 36-45 62-16 46-50 20 5 57 75 51 20 108 116-10 35 36 21-44 79-71 128-43 82-37 50-25 49-10 55-15 76-3 16-28 130-35 216-22 127-1 6-64-12-16 31-10 20-46 40-20 15-26 41-31 50-30 5h-57l-25 11-16 35-10 60-56 41h-51l-41 20 26 40 41 20 61 25 26 51-26 20-31-10-30-10-31-10-82-30-41-10-26 45 16 30 41 31 15 35-36 20-30-5h-36l-46-5h-72l-41 25-56 6-16-15v-21l10-40 16-60 20-51 20-60 46-76 41-20 46-71 46-70 21-61v-35l-11-96h-51l-51 16-26 5-56-76 10-111 10-50 20-96v-30l-5-10-15-15-11-5-15-5-26-5h-71l-26 5-36 20-5 5-10 15-10 16-5 10-11 10-5 5-10 5-46 5h-41l-15-5-11-15-5-15-15-30-11-31-10-30v-35l5-20 10-66 26-70 5-10 10-15 15-21 6-20 10-30 15-30 5-5 10-15 16-16z'
          id='NJ_Hudson'
          {...svgElementProps('Hudson')}
        />
        <path
          d='M-2125-7652l67 80 41 40 41 36 108 110 36 31 51 55 36 35 46 45 41 36 51 50h52l143 10 415 130 62 20 87 71h51l36 45 21 45 25 66 21 30-5 60-46 61-10 45 20 25 31 15-5 36-21 45-10 70-61 86v15l15 41 41 40 16 60-31 51 16 45-52 50 11 36 66 25 41 5 26 65 36 40 21 15 5 16-51 95h-21l-15-10-16 25-51 91-5 20 16 10 10 5-41 111 113 61-102 166-52 96-122 65-6 5-30 61-21 40-51 111-66 126-10 20-21 40-66 142-21-5-113-96-5-5h-10l-16-10-10-5h-5l-5-5h-10l67 151 5 20 15 40 21 61 15 35 5 10 11 20 5 20 10 25 10 21 11 20v10l10 20 15 45 11 25 25 56 11 30 25 60 21 56 20 45 62 146 5 10 11 20 13 36 7 9 5 26-517 86 51 332-563 107 98 352-674 67-34-36-21-35-9-35-13-71-9-78-20-93-29-95-22-51-22-49-18-38-17-34-17-27-14-28-21-23-4-4-26-18-28-17-17-9-37-20-20-10-21-10-33-21-34-10-22-4h-7l-24 3-25 5-24 7-56 25-45 14-26 9-41 9-26-1-30-11-35-17-31-25-20-15-23-23-27-19-30-16-20-6-25-21-22-15-8-21-9-31-8-47-10-50v-15l-2-6-9-30-12-34-14-31-10-39-5-36-3-20 1-16 6-30 1-30 10-35 11-31 8-36 18-78 5-25 11-46 2-35-4-60v-91l-4-91-2-25-4-21-5-36v-69l5-41v-46l5-50-6-35-8-42-17-34-36-35-26-30-36-35-49-54-48-53-31-34-15-17-24-22-35-26-49-21-67-22-5-2-67-11-71-7-41 3-16 4-30 15-22 15-26 19-29 22-26 20-40 19-42 6-46-7-36-13-34-9-41-28-44-47-23-54v-16l1-25 7-33 11-47v-18l108-91 102-95 5-10 31-91 30-30 77-41 10-5 26-50 10-5 52-25 35-16 57-40 153-65 77-76 77-61 153-121 62-35 56-71 15-20 42-15 25-20 31-15 31-10 35-20 36-16 5-5 21-20 20-15 11-10 15-15 51-20 46-10 62-6 25-5 72-60 72-46 30-15 21-20 5-20 51-15 41-5 31-36 61-115 72-91 36-46 61-90 102-106 98-86 30-45 46-31 21-45 15-60 20-31 31-20 46-25z'
          id='NJ_Hunterdon'
          {...svgElementProps('Hunterdon')}
        />
        <path
          d='M-977-3599l16 30 72 181 15 35 41 111 31 70 41 101 26 30 527-192 62-5 220 50 16 50 10 26 5 35v40l-50 252-21 66-5 50 26 70 5 61 10 40 62-5h46l36 30 56 80 62 10 41 10 15 21 36 50 164 100 36 51 41 20 52 5 66 10 16 5 15-5 36-16 31-10 36 15 20 36 56 30 52 45 36 5 51 5 41 10 20 15 62 25 31 20 5 35-30 187h-6l-10 5-5 10v20l5 10 10 10 6 5 20 20 10 20 6 21-6 5-15 10-25 15-16 10-20 10-5 5-31 15-26 15-15 10-10 5-82 51-77 45h-5l-113 61-72 35-10 10-15 11-5 10-11 15-5 25-10 35-10 10-15 10-6 10-25 36-10 15-6 10-25 50-31 46-36 40-61 5h-5l-16 5-5 5-20 5-16 10-41 10-30 16-11 20-15 10-46-10-21-71-61 31-46 30 185 463-10 5-72 10-179-40-16-15v-45l-20-36-103-25-72-55-108-50-71-50h-62l-26-15 21-36v-35l-5-10-5-20-31-20h-26l-41 5-41-5-20-10-26-25-31-20h-41l-15 5-16 15-20 25v25l5 21 10 20 11 25-5 25 15 20 26 25-51 91-16 30-51 35-41-10 4-8 15-38-2-62-17-48-26-44-34-44-30-25-6-6-22-21-17-21-9-5-36-15-20-10-21-15-25-21-21-19-15-26-7-18-11-31-3-26-10-25-21-30-18-35-15-36-14-30-20-36-20-29-10-11-19-17-34-33-26-14-50-42-46-29-5-3-41-27-36-21-46-22-42-18-36-18-61-41-61-36-19-8-17-17-3-4-13-16-16-30-25-41-21-34-11-39-19-37-16-43-15-53-22-59-20-46-40-71-14-17-22-28-32-42-44-53-41-53-23-15-21-15-25-21-19-7-31-15-21-5-25-6-31-6-35-11-31-19-5-2-23-23-34-29-62-70-20-25-21-26-28-34 674-67-98-352 563-107-51-332z'
          id='NJ_Mercer'
          {...svgElementProps('Mercer')}
        />
        <path
          d='M1393-5526l31 40 56-10 497-46 682-77 123-10 10 10v65l20 35 42 56 20 20 10 5 21-5 123-21 82-20 46-10 20-45 5-16 103 20 31-5 41-10 102 10 46-10 36-10 15 5 16 25 15 30 10 5v15l-20 66-25 70-16 101-20 86-25 30-72 10-46 10-41 21-57 45-35 71-21 45-10 55 10 71 16 50-5 40-21 41-30 35-21 40-15 36-5 40-10 35 5 41v50l-26 50-41-5-25-30-31-50-36-25-56-20-82-30h-67l-51 10-31 40-20 56-62 65-51 51-72 40-51 35-61 51 46 20 67 15 128-15 36-41 30-80 51-106 87-31 98 30 143 111 6 65 56 116 72 35 97 50 113 61 67 20-15 60-62 20-41 6-77 95 1 10v76l-5 161v66h-5l-5 10-41 40-154 161-235 243-788 867v10l-5 10-5 5v30l-21 51-5 5h-5l-31 15-276 156-210 132-21-5-15-10-26-5h-66l-10-5-82-15 30-187-5-35-31-20-62-25-20-15-41-10-51-5-36-5-52-45-56-30-20-36-36-15-31 10-36 16-15 5-16-5-66-10-52-5-41-20-36-51-164-100-36-50-15-21-41-10-62-10-56-80-36-30h-46l-62 5-10-40-5-61-26-70 5-50 21-66 50-252 36-10 16-10 15-10 61-35 11-6 112-186 46-232 10-10 56-35 11-5 87-25 51-11 195-141 20-10 82-86 15-15 62-65 138-132 20-15 21-20 31-35 35-56 11-15 15-20 10-15 36-25 10-5 103-46 61-30 10-35-26-76-20-80-164-35-31-15-67-146-61-71-93-80-46-56-62-125-5-26-15-55 35-111 77-75 123-61 113-46 71-60z'
          id='NJ_Middlesex'
          {...svgElementProps('Middlesex')}
        />
        <path
          d='M3466-3903l56 15 67 50 15 45-10 36-20 20 61-5 108-66 56-111 46-55 41 30 72 60 92 15h77l46-56 15-5h47l66 40 62 46 46 35 82 15 118 45 97 60 57 50 77 45 41 36 77 20 66 10 52 30 82 15 184 24 72 30 36 51 31 50 41 45 5 51 6 65 10 55-5 41h-31l-15-20-26-25-21-15-20-31-62-10-41-20-46 21-20 25-36 30-41 35-26 5-35 16-26 25-15 30-52 15-46 16-46 40-82 50-20 36 10 50 36 20 41-20 31-40 41-31 51-40h26l61-5 26-10 25-56 36-25 51-10 46-31 67 5 46 15 46 20 52 20 10 31-5 70-21 56-51 45-66 30-41 36 20 30-15 35-66 25-47-15h-36l6 31 25 35 16 45-21 40v36l16 20h31l15-15 15-31 26-35 36 10 10 25 41 10 20-35 6-15 20-30-10-46 30-20 36 5h36l36-76 20-70 10-66 16-90-11-71-5-101v-45l-10-45-6-35v-26l-10-70v-50l-26-66-57-126-46-115v-35l20-41v-40l-36-35-25 5h-36l-56-10-6-61v-50l-5-35-20-50-42-26v-30l26-20 41-15 26 20 46 30 25 15 57 76 26 45 25 70 31 91 16 60 25 35 1 61 10 96 21 85 5 76 5 75 21 55 5 16 10 25-5 75v86l-10 91-15 120v126l21 106-10 60-5 21-20 95-41 71-21 75-5 111 6 61 5 90-20 126-26 91-15 75-41 111-36 71-20 45-26 71 1 75v111l-26 76-41 95-20 86-36 20-41 5-56-25-21-20-25-35h-41l-11 25-20 36-46 5-26-20-41-36-46-10-21 41 6 30 25 25 57 55 77 30 72 10 56-20 56-30 26 5 20 30-5 60-10 56-30 116-16 80-30 116-10 126v106l-5 105-51 56-67-5-36-15-25-10-21 15-56 30-72 36-51 10-31-25-25-30-47-30-36-71-20-55 20-71-103-85-20-5-46-20-21-30-15-41-31 31-5 15-194 262-139 151-10-15-31-25-10-70-21-36-51-5-25-10-42-20-41-5-56-5h-46l-41-5-31-9-20 5-62 30-66 10h-36l-72-10-82-25-31-40-10-30 10-71 10-40-26-65-36-101-46-55-31-26-10-100-5-35-21-46-20 5-252-9-251-15-707-14-353 308-650 590-226 131-25-55L566 4 350-439 165-902l46-30 61-31 21 71 46 10 15-10 11-20 30-16 41-10 16-10 20-5 5-5 16-5h5l61-5 36-40 31-46 25-50 6-10 10-15 25-36 6-10 15-10 10-10 10-35 5-25 11-15 5-10 15-11 10-10 72-35 113-61h5l77-45 82-51 10-5 15-10 26-15 31-15 5-5 20-10 16-10 25-15 15-10 6-5-6-21-10-20-20-20-6-5-10-10-5-10v-20l5-10 10-5h6l82 15 10 5h66l26 5 15 10 21 5 210-132 276-156 31-15h5l5-5 21-51v-30l5-5 5-10v-10l788-867 235-243 154-161 41-40 5-10h5v-66l5-161v-76l-1-10 77-95 41-6 62-20z'
          id='NJ_Monmouth'
          {...svgElementProps('Monmouth')}
        />
        <path
          d='M-1138-9009l72-15h36l41-20 30-15 41-36h31l26 10 10 21 36 20 41-5 51 30 36 40 10 40 11 36 15 25 46 5 62-61 61-25 143-51 82-50 16-15 25-25 10-6h6l20-5 10-5 5-5 5-25-5-10-10-25 10-25 5-10 21-21 71-50 6-5 5-5 25-41 16-50-1-10v-35l-5-25-5-11-20-25-16-15-15-30v-30l10-10 256-328 56-56 10-15 16-15 15-20 15-15 409-474 10-11 11-20 92-106 46-55 82-96 148-156 82 30 61 70 11 61 5 20-15 30-16 30-25 25-16 1-10 5-31 40-40 136-11 50 16 61 26 10 25-10 31-31 20-25 26-25 36-30 123-46 97-55 46 20 31 25 36 40 82 101 15 35-10 30-20 41-16 30v40l36 15 41-20 10-20 16-30 30-21h36l46 15 31 15 46 25 57 71 5 30 41 20 56 5h26l66-5 62-25 31 5 35-10 6 15 20 65h26l51 5 51-5 26 10 26 50 76 5 62 5 41 40 82-15 46 15 20 40 11 56-31 30-20 35-5 26v15l15 20h41l51 5 16 25 25 70 11 41-16 55 6 15 20 56-10 85-25 96-36 76-15 30v35l30 56 16 20 31 20 41 15 25 5 26 10 20 15 11 25-16 35-5 31-25 50-16 45-71 11-31-15-5-21v-15l-10-10-36-10-11-5-5-15-15-15-5-10-31-5h-20l-31-5-36 10-31 15-41 5-10-15-15-30-36-10-62 10-25 31-21 45 16 65-36 157 31 60-5 50 10 26 46 15 52 35 5 10-26 86-10 40-25 55 20 46-10 45-5 91-31 55-5 46v50l-25 35-26 20-61-5-21 21-10 65-56 20-31 36-46 50v156l-35 56-5 40 20 50v31l-25 40-16 20 21 10h25l41 25 26 10 26 5-5 20-21 16-31 15-5 35-10 50-41 56-148 131-10 5-103 101-5 10-71 61h-5l-72 75h-5l-72 96-5 15-123 61-51 25-10 25v16l10 20v10l-20 50-11 5-25-5h-16l-15 41-92 40-51 15-41 10-36 5-41 21-20 10-16 10-46 15-15 15-10 25-16 36-25 30-41 15-52-5-41-25-10-56-10-50-11-25-20-20-5-20 41-41 10-45-16-40v-71l36-35 51-10 21-116-36-55-46-56-11-55-31-40-20-15-5-16 10-20-5-25 10-35-31-15-46-20-67-20-10-41 10-50-25-86-16-45-15-50-16-20-286 91-52 15-46 5-138 51-917 253h-51l-87-71-62-20-415-130-143-10h-52l-51-50-41-36-46-45-36-35-51-55-36-31-108-110-41-36-41-40-67-80 82-36 72-35 25-61h6l81-20 46-40 41-46 16-45 46-45 30-56 52-95 35-16 31-30-5-70-16-41 6-25 25-10 67-35-5-51 10-35 41-15v-71l-16-50-10-50 5-81 56-40 56-21 31-10 21-75 56-51 71-55z'
          id='NJ_Morris'
          {...svgElementProps('Morris')}
        />
        <g id='NJ_Ocean' {...svgElementProps('Ocean')}>
          <path
            d='M684 235l226-131 650-590 353-308 707 14 251 15 252 9 20-5 21 46 5 35 10 100 31 26 46 55 36 101 26 65-10 40-10 71 10 30 31 40 82 25 72 10h36l66-10 62-30 20-5 31 9 41 5h46l56 5 41 5 42 20 25 10 51 5 21 36 10 70 31 25 10 15 139-151 194-262 5-15 31-31 15 41 21 30 46 20 20 5 103 85-20 71-11-35-20 15-15 30 20 136 16 70 61 66 52 5 82 30 66-21 72-50 92-15 72 14 36 21 5 5 16 25v55l5 71-5 65-20 101-21 75-20 66-36 85-20 51-21 75-20 56-20 111 5 55 5 101-41 161-15 201-25 116-20 91-21 75-15 106-25 136-21 96-5 136-25 171 5 100 6 91-11 86-25 90-15 91-10 60v81l-15 91-16 45-15 55-10 81v191l-10 61-15 50-10 40-21 30-5 26-10 5-31 5-26-35-20-16-36-4h-26l5-31 5-20 21-15 36 15 31 5 25-40v-46l-15-40-16-50 5-50v-31l15-35 31-75 26-71v-40l-1-101-5-96 5-85 15-86 16-100 4-81-5-50v-81l5-45 10-71 10-75 11-86 15-85 15-31 15-35 26-45 15-56 10-60-5-50-20-46-31-30-16-25-5-40 21-20 36-31 25-75 15-71 16-70 5-76 25-80 10-46 31-70 15-46 15-45 11-80-6-41V761l-5-65v-55l20-56 16-55 15-30 5-26-10-5-67-15-31 21-41 30-30 20-52 35-41 16-51 20-61-20-67-10-92-15-47-50-56 25-5 45 31 30 51 5 26 31 31 25 51-11h51l21 31 56-21 56-25 72-15 57 10 5 45-5 20-10 61-21 35-72 55 11 56-26 75-56 5-36 6-21-31-10-45-31-25-46 15-36-10-31-15-41-30-36-50-30-30h-41l-31 30 5 20 21 15 46 40 20 25-51 66 11 30 25 5h103l61 20 31 25 21 30-16 41-30 10-26-10-21-15-30 30-16 20h-46l-46-15-46-10-10 20-21 20-20 56 15 40 31 20 62 20 46-15 20-25 26-15 31 20 15 10v25l-5 20-26 20-5 25 16 16 20 25 31 20 10 20v15l-20 40-15 56-21 20 5 20 11 30 5 15-11 20-5 36-15 45-25 30-36-5-26 5-15 21-31 30-31 5-41-10-61-10-52-10-56-50-21-20-41-31-36 11-36 10h-35l-82 5 5 20v56l20 15h16l46-6h36l56 15 31 15 41 41 46 30 36 25 31 10 61-15 62 5 67-1h56l46-5 31 10 15 20v36l-20 20-31 15-25 15-46 40-31 41-31 60-51 91-25 81-21 60 5 65 6 36-21 40-31 5h-66l-36 5-21 5-10 41 11 15 20 5 36 10h41l36-11 51 5 31 10 31 41-26 25-41 15-41 10-20 15-16 41-5 45-25 75-31 51-51 25-57 15-41 26 1 35 25 10 41-5 41 10 11 45-52 15-77 36-25 75 5 55-20 81-46 40-31 31-36 40 21 50 15 30 26 36v25l-15 20-21 30-10 25-21 21-10 40v20l-5 30v51l-5 45 11 55 36 10 41 10 76 10 62 10 5 15v25l-15 66 10 25 21 25-5 30-36 5h-21l-30-5-41 1v20l15 20 10 20 26 10 26 5h51l56 15-5 20-15 20-26 15-10 15-10 41-36 5-46-20-26 5-15 45v60l-21 11-61 30-21 40-15 25-15 41 10 10 31 5 36 10 5 20-26 20-36 20-61 41-61 10-26 30-15 25-21 15 5 41-5 30-46 35-10 50-5 11-26 40-20 5-26-15-36-5-25 25-62 20-36-10-10-10-21 10-15 26 10 80 21 40-5 10-36 6-36-11v56l-15 30-36 35-5 15-5 31 20 35 16 35-21 20-30 10-52 6-30-36-21-20-62 20-10 26 11 45-5 45h-26l-26-45-20-25-16 5-30 20-52 30-20 51-10 70-5 56-41 5-46 20-6 25-10 30-20 41-36-10-21-36h-30l-11 31-5 65 11 45 31 31 35 25 6 30 10 45 41 10 20 20 21 40 41 26 67 25 56 50-15 35 5 45 21 41-67 70-25 35v61l-57-15h-61l-57 40-10-15-10-10 10-40 5-35-5-41 15-15 41-10-10-25-36-35 10-30 16-31-57-35-67-55-71 40-82-15-6-50-56-25-31 30 16 71-77-15-93-10-61 5-46 5-16-45-5-76-51-35-72-45-36 15-15-40 25-15v-46l-15-30-6-25h16l10-10 21-5h15l26 5 41-5 10-15 5-25 15-21 5-25 6-20v-30l15-45 5-26 5-5 5-20 5-10 11-20 5-10 5-20 5-81v-95l-1-51 10-236 39-1395-247-568-5-15-31-71-15-40-5-10-16-35-103-257-56-140-72-177-11-20-128-291-47-111-10-30-5-20-10-21-11-15-25-65-11-35-41-96-5-15-15-30-11-25-20-66-52-125-10-31-10-25-11-25-20-45-10-25-6-20-25-56-5-20-11-15v-10l-5-15-26-56-72-161-77-241-20-40-67-141-41-106-6-10-41-95-10-21-16-40z'
          />
          <path
            d='M4684 1215l5-35 11-20h15l10 30 11 30v30l-16 25-31-15-10-25z'
          />
          <path
            d='M4690 1683l16 5 20 45-5 31v30l-15 15-10-5-21-5-10-35 15-35v-31z'
          />
          <path
            d='M4380 3370l-10-10-5-15 10-25 26 5 46 30 31 20 20 50 11 36-5 25-31 5-21-15-31-20-15-31-15-30z'
          />
          <path
            d='M4253 3743l-21-5-5-15 5-10-5-20 5-5 31-11h31l36 5 20 10v20l-20 16-46 15z'
          />
          <path
            d='M4545 3742l21 35-5 66-6 55-25 71-26 45-35 51-11 35-35 55-31 56-20 65-31 91-26 60-30 71-21 75-46 106-35 91-57 85-51 86-30 56-57 95-41 61-5 40-40 71-47 70-51 66-30 45-26 65-46 101-51 81-36 75-25 36-31 60-51 50-57 96-46 61-35 60-31 61-31 45-15 20-31 66-30 50-26 60-36 41-31 20-15-10-10-20v-40l46-46 15-35 5-45v-56l5-35 10-10 46-10 31-20 26-41 20-80 5-36v-25l26-15 46-45 20-41 16-45 15-35 26-50 25-26 36-20 36-15 15-30 5-30 10-41 31-40 31-50 46-91 41-61 41-80 30-46 21-45 10-50 5-35 10-51 21-45 35-46 26-35 15-50 21-30 20-21 31-25 41-30 20-35 21-56 31-55 30-20 5-31v-50l31-50 26-31 25-30 21-45 15-50 5-41-16-40-5-20-10-30v-20l15-21 26-5 36-5 61-45 31-96 15-91 31-75 30-50z'
          />
          <path
            d='M4146 4352l5-15 21-10 25 15 6 15v35l-16 20-20 6-16-11-10-10-5-15v-25z'
          />
          <path
            d='M3762 4901l16-10h20l16 10 5 15v31l-31 20-20 20-5 20-5 15-26 15-36-5-10-15-5-30 5-30 25-20 21-15 20-10z'
          />
          <path
            d='M3609 5209l-10 15-21 5h-10l-10-5-10-30 10-20 10-5 15-21 16-10h36l10 10-5 20-21 21z'
          />
          <path
            d='M3543 5516v25l-21 20-35-5-16-10h-10v-30l15-15 31-5h20z'
          />
          <path
            d='M3236 5768l-21-20-5-20 10-10 5-20 16-11 30-5 21 10 10 21-10 40-15 20z'
          />
          <path
            d='M3057 6040l10-10 5-10 26-15 10 10 20 10 6 15v10l-11 20-15 35-31-5-15-15-10-25z'
          />
          <path
            d='M2805 6056l16 5 15 10 10 15 21 20 15 10-5 30-20 15-62-10-15-15-5-15v-55l5-15z'
          />
          <path
            d='M3011 6599h-25l-16-20 5-15 6-5 15-15 15-6 21 5 5 21v15l-15 15z'
          />
        </g>
        <path
          d='M3354-11591l71 40 105 56-56 147-82 211-15 36-41 106-36 100-10 16-25 75-11 20-20 46-10 25-5 15-5 20-26 71-10 15-56 151-61 156-11 26-20 55 15 10 36 35 21 21 46 100 11 25 20 36 36 50 15 25 108 96 98 45 143 10 82 10 210 29 41-55 31-5 25 20 108 85 36 20 46 41-15 35-5 35-26 41-15 75-10 10-16 15-5 21 21 20h15l10 5 11 5 10 25 21 40 5 10v10l-5 15-6 5-10 16-5 15v15l16 25 35 15 21 5 10 5 11 25v25l-11 71-5 106 1 25v10l5 15 5 10 15 101 6 15 5 10 10 10 10 5 5 5 11 5 5 5h5l36 51 5 5 36 55 46 181-30 36-36-61-11-10-5 5-30 10-5 41 5 35v35l-15 101 25 60 5 10v36l-5 20v10l-5 10-10 30-5 10-15 15-16 5-41 16-174-126-585-442-77-60-31-61-30-60-21-56-31 10-15 66-87 56-20-16-16-10-21-45-5-5-5-10v-45l-5-10v-10l-5-6-57-15 16-45 25-50 5-31 16-35-11-25-20-15-26-10-25-5-41-15-31-20-16-20-30-56v-35l15-30 36-76 25-96 10-85-20-56-6-15 16-55-11-41-25-70-16-25-51-5h-41l-15-20v-15l5-26 20-35 31-30-11-56-20-40-46-15-82 15-41-40-62-5-76-5-26-50-26-10-51 5-51-5h-26l-20-65-6-15-35 10-31-5-62 25-66 5h-26l-56-5-41-20-5-30-57-71-46-25-31-15-46-15h-36l-30 21-16 30-10 20-41 20-36-15v-40l16-30 20-41 10-30-15-35-82-101-36-40-31-25-46-20-97 55-123 46-36 30-26 25-20 25-31 31-25 10-26-10-16-61 11-50 40-136 31-40 10-5 16-1 25-25 16-30 15-30-5-20-11-61-61-70-82-30 25-36 92-111 1013-1162 280 186 72 46 66 35z'
          id='NJ_Passaic'
          {...svgElementProps('Passaic')}
        />
        <path
          d='M-3681 5878l-26 50-31 76 11 20v15l-6 5-15 10-31 15-5 41 6 55 15 166-41 111-5 75v66l-31 55-5 25 47 56-6 15 1 35 5 55v26l-56 131v80l-16 45-1334-1126-584 630-82 106-62 25-87 15-66-10-31 25-26 71-46 80-87 66-25 60-26 50-46 5-52-10-189-40-26 5-46 71-15 35v40l-5 46-11 10-15 20v20l-10 30-10 10-11 15-5 31 31 20 41 15v20l-41 60-5 36-5 15v15l20 40 6 25 10 56 26 15-11 25v60l-41 5-10 5v46l-5 20v20l-56 20-62-35-41-71-51-45-41-25-62-55-36-91-51-101-108-110-92-96-72-30-31-20-67-65-56-46-62-5-41 16h-67l-72 45-77-85-27-34-70-104-45-102v-40l8-31 18-64 11-25 16-35h66l93-4 94-5 16-8 14-8 16-9-20-60-5-10-5-25 5-31 5-15 10-25 5-25-5-15v-45l10-41 5-55v-40l-5-10-13-9-18-12-10-20-5-15 5-30 15-20 36-30 31-31 20-25 15-23 16-27 16-30 10-36 25-55 5-40-5-35-15-36-21-25-30-25-72-20-21-15-15-15-11-20-15-20v-16l-5-15-16-15-20-5-21-5-20-15-41-25-31-30-15-25-5-17-6-19-15-71-16-69-5-51 8-21 18-54 15-31 21-25 25-20 16-15 15-20 20-20 26-20 36-16 31-20 5-10 10-10 16-20 10-25 15-20 16-25 20-21 20-20 21-25 20-25 21-30 15-31 5-30 5-45 6-25 5-45 5-41 5-40 10-30 15-25 22-17 34-33 11-16 23-46 23-45 5-20 10-20 16-5 10 5 26 5h25l10-15 6-15 5-20v-30l10-46 5-30 5-35 10-30 21-41 15-35 21-40 20-45 15-46 11-30 15-30 10-30 16-21 20-20 21-10 20-30 31-30 61-66 62-55 26-25 20 15 82-15 56-5 41-16h26l10 46 31 35 5 86-20 25-26 35 5 30 26 5 5 10 21 25 15 31 46 30 41 15 21 70 36 5 15 25 31 81 5 10v20l-5 35-5 26 10 35 16 20 35 20 16 25 5 35 26 36 36 15 51 5 20 15 16 20 36 30 36 5h20l21 35 41 56 25 25 11 30 5 20h26l46-15 10 10 36 45 46-15h56l36 15 47 40 56 36 41-11 87-20 62 15 51 20 20 21 11 30 5 35 26 45 20 45 62 21 46 15 67-16h15l56 10 46-40 47-5 46 5 118 111 231 211 590 533z'
          id='NJ_Salem'
          {...svgElementProps('Salem')}
        />
        <path
          d='M-797-6903l917-253 138-51 46-5 52-15 286-91 16 20 15 50 16 45 25 86-10 50 10 41 67 20 46 20 31 15-10 35 5 25-10 20 5 16 20 15 31 40 11 55 46 56 36 55-21 116-51 10-36 35v71l16 40-10 45-41 41 5 20 20 20 11 25 10 50 10 56 41 25 52 5 41-15 25-30 16-36 10-25 15-15 46-15 16-10 20-10 41-21 36-5 41-10 51-15 92-40 31 50 26 95 20 66 205-96 77 20 113-76 10 25-5 101-25 121-57 131-138 156-163 142-57 35-92 46-72 30-71 60-113 46-123 61-77 75-35 111 15 55 5 26 62 125 46 56 93 80 61 71 67 146 31 15 164 35 20 80 26 76-10 35-61 30-103 46-10 5-36 25-10 15-15 20-11 15-35 56-31 35-21 20-20 15-138 132-62 65-15 15-82 86-20 10-195 141-51 11-87 25-11 5-56 35-10 10-46 232-112 186-11 6-61 35-15 10-16 10-36 10v-40l-5-35-10-26-16-50-220-50-62 5-527 192-26-30-41-101-31-70-41-111-15-35-72-181-16-30-5-26-7-9-13-36-11-20-5-10-62-146-20-45-21-56-25-60-11-30-25-56-11-25-15-45-10-20v-10l-11-20-10-21-10-25-5-20-11-20-5-10-15-35-21-61-15-40-5-20-67-151h10l5 5h5l10 5 16 10h10l5 5 113 96 21 5 66-142 21-40 10-20 66-126 51-111 21-40 30-61 6-5 122-65 52-96 102-166-113-61 41-111-10-5-16-10 5-20 51-91 16-25 15 10h21l51-95-5-16-21-15-36-40-26-65-41-5-66-25-11-36 52-50-16-45 31-51-16-60-41-40-15-41v-15l61-86 10-70 21-45 5-36-31-15-20-25 10-45 46-61 5-60-21-30-25-66-21-45z'
          id='NJ_Somerset'
          {...svgElementProps('Somerset')}
        />
        <path
          d='M2228-12255l-1013 1162-92 111-25 36-148 156-82 96-46 55-92 106-11 20-10 11-409 474-15 15-15 20-16 15-10 15-56 56-256 328-10 10v30l15 30 16 15 20 25 5 11 5 25v35l1 10-16 50-25 41-5 5-6 5-71 50-21 21-5 10-10 25 10 25 5 10-5 25-5 5-10 5-20 5h-6l-10 6-25 25-16 15-82 50-143 51-61 25-62 61-46-5-15-25-11-36-10-40-36-40-51-30-41 5-36-20-10-21-26-10h-31l-41 36-30 15-41 20h-36l-72 15-492-578-124-156-200-257-51-61-15-15-57-70-51-71-26-35-102-121-313-392-16-20-97-116-112-141v-16l-5-15-10-5-22 6-20 10-20 17-15 17-27 17-25 19-21 5-22 4-15-3-10-15-4-16v-12l5-10 17-30 3-8 16-36 25-60 26-30 27-29 4-5 10-7 26-17h9l16-3 25-1 13-5 23-14 26-25 25-13 7-7 29-21 22-16 9-14 12-16 5-21 19-18 10-10 21-11 20-5 30-17 37-23 51-40 38-29 39-47 36-47 20-29 29-47 27-64 15-35 12-18 11-25 13-17 18-18 17-14 27-19 25-35 17-25 3-8 13-27 8-19 5-22 10-26 11-30 25-50 26-50 21-45 14-26 36-60 7-10 7-14 12-35 5-25-5-20-5-7-6-10-20-26-18-25-4-30 1-15 27-38 9-23 5-30 10-25 6-22 19-26 17-25 26-19 19-9 30-31 16-39v-11l10-60 11-35 13-22 9-22 2-25 11-30 16-22 17-28 15-30 17-29 16-25 22-25 26-23 4-3 21-14 25-20 31-25 41-31 51-40 47-28 13-16 7-7 4-9 6-11v-20l-5-15-11-15-5-15 1-24 10-13 10-10 21-10 25-4 20-4 37 1 32-8 9-3 19-6 28-12 23-15 16-19 15-34 12-34 14-32 17-23 8-12 29-23 26-14 37-9 36-9 19-1 27-3 35 7 37 1 26-6 30-13 42-19 40-18 43-15 8-4 28-15 54-30 387 242 370 229 576 347 1059 656 226 150z'
          id='NJ_Sussex'
          {...svgElementProps('Sussex')}
        />
        <path
          d='M2205-7084l103 35 92 60 139 111 30 15 52-10 36 15 56 20 56 25 72-30 51-51 56-5 118 45 175 65 174 35 103 50 46 76 41 91 41 15 266 9 103-20 113 100-21 51-5 45-15 50-46 61-41 61-25 45-57 40-51-5-77 16-56 40-46 35-36 46-31 70-15 66-10 80-10 81 5 65 5 91-10-5-15-30-16-25-15-5-36 10-46 10-102-10-41 10-31 5-103-20-5 16-20 45-46 10-82 20-123 21-21 5-10-5-20-20-42-56-20-35v-65l-10-10-123 10-682 77-497 46-56 10-31-40 92-46 57-35 163-142 138-156 57-131 25-121 5-101-10-25-113 76-77-20-205 96-20-66-26-95-31-50 15-41h16l25 5 11-5 20-50v-10l-10-20v-16l10-25 51-25 123-61 5-15 72-96h5l72-75h5l71-61 5-10 103-101 10-5z'
          id='NJ_Union'
          {...svgElementProps('Union')}
        />
        <path
          d='M-2794-11042l112 141 97 116 16 20 313 392 102 121 26 35 51 71 57 70 15 15 51 61 200 257 124 156 492 578-31 46-71 55-56 51-21 75-31 10-56 21-56 40-5 81 10 50 16 50v71l-41 15-10 35 5 51-67 35-25 10-6 25 16 41 5 70-31 30-35 16-52 95-30 56-46 45-16 45-41 46-46 40-81 20h-6l-25 61-72 35-82 36-41 20-46 25-31 20-20 31-15 60-21 45-46 31-30 45-98 86-102 106-61 90-36 46-72 91-61 115-31 36-41 5-51 15-5 20-21 20-30 15-72 46-72 60-25 5-62 6-46 10-51 20-15 15-11 10-20 15-21 20-5 5-36 16-35 20-31 10-31 15-25 20-42 15-15 20-56 71-62 35-153 121-77 61-77 76-153 65-57 40-35 16-52 25-10 5-26 50-10 5-77 41-30 30-31 91-5 10-102 95-108 91 1-22-11-48-11-51-15-50-20-30-4-14-5-23-7-19v-25l5-20 16-10 25-10 16-3 6-7 10-12 11-30 1-20-3-54-5-40-5-26-10-35-18-27-10-11-14-21-15-11-5-20 1-25 4-26 7-19 15-34 18-20 26-30 27-24 26-25 21-21 24-23 10-31 5-30-11-36-18-15-31-5-42-6-39-7-35-18-23-19-11-25-10-45 1-11 9-44 15-66 20-60 30-62 21-34 21-25 16-16 2-6 9-20 4-19 4-16 9-21 16-24 6-25-9-30-15-26-12-18-18-18-10-11-40-40-14-22-9-33 4-18 12-19 32-28 47-30 30-11 28-18 20-30 15-30 10-26 5-30 6-20 10-18 15-19 21-15 26-3 5-1 25 1 36 5 36 7 36 11 31 10 5 2 35 10 25 6 22-3h4l11-6 4-5 11-14 17-22 16-28 14-28 20-21 15-20 25-19 32-7 31-17 15-14 36-39 25-40 15-36 5-20 12-29 11-24 4-5 17-15 14-13 12-12 17-13 22-24 9-22 11-35 1-7v-23l1-15-9-45-20-26-20-24-20-21-16-25-10-25-1-26 11-29 15-21 16-6 31-9 30-5h31l26 10 12 3 8 5 26 7 20-1 21-4 17-17 9-18 9-25 15-31 15-18 22-24 10-21 11-29-1-38-14-47-22-49-39-50-24-43-25-35-3-4-17-26-21-35-9-29-10-30-2-33-10-36-9-37-9-31-13-25-21-29-20-21-19-9-22-14-20-22-18-23-30-51-48-88-37-79-26-36-10-20-31-60-10-25-5-26v-20l-5-30-10-20-15-16-20-5-37-14-16-11-18-8-19-18-4-4-15-35 10-29 17-24 14-22 2-12v-17l1-13v-12l2-28 15-17 26-17 36-26 45-36 14-14 36-33 42-34 62-24 51-20 42-24 35-18 22-13 12-6 52-13 63-27 67-35 12-9 51-39 14-9 17-10 33-19 21-15 30-25 26-19 21-24 21-15 16-14 14-10 3-24v-16l6-20 6-25 15-15 16-20 16-19 11-26 19-56 9-18 11-25 10-17 16-19 15-5 19-8 13-16 19-18 26-20 30-15 32-13 25-14 35-9 32-9 5-5 21-19 42-35 32-39 16-25z'
          id='NJ_Warren'
          {...svgElementProps('Warren')}
        />
      </g>
    </svg>
  );
}

export default NewJerseyMap;