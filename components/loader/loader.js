import React from 'react'
import Stylesheet from '../general/stylesheet.js'
import sheet from './loader.scss'

export const Loader = (props) => (
  <div className={'loader ' + props.status}>
    <svg width='59' height='40' viewBox='0 0 177 120' version='1.1'>
      <path fill={props.dark ? '#000000' : '#ffffff'} d='M 57.6666 33.4999L 57.6666 31.3333C 57.6666 25.8888 55.8332 21.7222 52.1666 18.8333C 48.611 15.8333 43.9444 14.3333 38.1666 14.3333C 33.7222 14.3333 30.2222 15.1111 27.6666 16.6666C 25.2222 18.1111 22.8889 20.3333 20.6666 23.3333C 20 24.2222 19.2777 24.8333 18.5 25.1666C 17.7222 25.4999 16.6666 25.6666 15.3333 25.6666L 10.3333 25.6666C 9.1111 25.6666 7.99999 25.2222 6.99999 24.3333C 6.1111 23.4444 5.72221 22.3888 5.83332 21.1666C 6.16666 17.8333 7.77777 14.5555 10.6666 11.3333C 13.6666 7.99998 17.6111 5.27776 22.5 3.16666C 27.3888 1.05554 32.6111 0 38.1666 0C 48.4999 0 56.8332 2.88888 63.1666 8.66665C 69.611 14.4444 72.8332 22.5555 72.8332 32.9999L 72.8332 83.8332C 72.8332 85.0554 72.3888 86.111 71.4999 86.9998C 70.611 87.8887 69.5554 88.3332 68.3332 88.3332L 62.1666 88.3332C 60.9443 88.3332 59.8888 87.8887 58.9999 86.9998C 58.111 86.111 57.6666 85.0554 57.6666 83.8332L 57.6666 76.9999C 55.8888 80.9999 52.111 84.1665 46.3333 86.4998C 40.5555 88.8332 34.7777 89.9998 28.9999 89.9998C 23.3333 89.9998 18.2777 88.9998 13.8333 86.9998C 9.38887 84.8887 5.94444 82.0554 3.49999 78.4999C 1.16667 74.9443 0 70.9443 0 66.4999C 0 58.1666 3.11111 51.6666 9.33332 46.9999C 15.5555 42.2221 23.8333 38.9999 34.1666 37.3333L 57.6666 33.4999ZM 57.6666 46.8332L 37.9999 49.9999C 30.7777 51.111 25.1666 52.9443 21.1666 55.4999C 17.1666 57.9443 15.1666 61.0554 15.1666 64.8332C 15.1666 67.611 16.4444 70.111 19 72.3332C 21.5555 74.5554 25.4444 75.6665 30.6666 75.6665C 38.6666 75.6665 45.1666 73.3887 50.1666 68.8332C 55.1666 64.2777 57.6666 58.3332 57.6666 50.9999L 57.6666 46.8332Z' />
      <path fill={props.dark ? '#000000' : '#ffffff'} d='M 112.316 115.5C 112.316 116.722 111.872 117.778 110.983 118.666C 110.094 119.555 109.038 120 107.816 120L 101.65 120C 100.427 120 99.3718 119.555 98.4829 118.666C 97.594 117.778 97.1496 116.722 97.1496 115.5L 97.1496 6.16665C 97.1496 4.94444 97.594 3.88888 98.4829 2.99999C 99.3718 2.11111 100.427 1.66666 101.65 1.66666L 107.816 1.66666C 109.038 1.66666 110.094 2.11111 110.983 2.99999C 111.872 3.88888 112.316 4.94444 112.316 6.16665L 112.316 11.3333C 117.983 3.77777 126.594 0 138.15 0C 145.038 0 151.261 1.6111 156.816 4.83332C 162.483 8.05554 166.983 12.6666 170.316 18.6666C 173.761 24.6666 175.649 31.6666 175.983 39.6666C 176.094 40.7777 176.149 42.5555 176.149 44.9999C 176.149 47.5555 176.094 49.3888 175.983 50.4999C 175.649 58.4999 173.761 65.4999 170.316 71.4999C 166.983 77.3887 162.538 81.9443 156.983 85.1665C 151.427 88.3887 145.149 89.9998 138.15 89.9998C 131.927 89.9998 126.65 88.9443 122.316 86.8332C 118.094 84.611 114.761 81.8887 112.316 78.6665L 112.316 115.5ZM 112.316 50.9999C 112.65 58.7777 114.983 64.8332 119.316 69.1665C 123.65 73.4999 129.372 75.6665 136.483 75.6665C 143.705 75.6665 149.427 73.3332 153.649 68.6665C 157.983 63.9999 160.372 57.6666 160.816 49.6666C 160.927 48.5555 160.983 46.9999 160.983 44.9999C 160.983 42.9999 160.927 41.4444 160.816 40.3333C 160.372 32.3333 157.983 25.9999 153.649 21.3333C 149.427 16.6666 143.705 14.3333 136.483 14.3333C 129.594 14.3333 123.927 16.5 119.483 20.8333C 115.038 25.0555 112.65 30.7222 112.316 37.8333L 112.15 44.3332L 112.316 50.9999Z' />
      <path fill={props.dark ? '#000000' : '#ffffff'} d='M 2.03419 118.555C 2.92308 119.444 3.97865 119.889 5.20087 119.889L 83.2905 120L 84.5818 120C 84.7308 120 84.8797 119.966 85.0137 119.901C 86.267 119.293 85.5256 119.513 84.6794 118.666C 83.7905 117.778 83.2905 116.722 83.2905 115.5L 83.2905 105.832C 83.2905 105.28 82.8437 104.832 82.292 104.832L 5.20087 104.722C 3.97865 104.722 2.92308 105.166 2.03419 106.055C 1.14531 106.944 0.700851 108 0.700851 109.222L 0.700851 115.389C 0.700851 116.611 1.14531 117.666 2.03419 118.555Z' />
      <path fill={props.dark ? '#000000' : '#ffffff'} d='M 171.616 104.833L 127.345 104.833C 126.793 104.833 126.345 105.281 126.345 105.833L 126.345 115.5C 126.345 116.722 125.845 117.778 124.957 118.667C 124.224 119.399 123.817 119.333 124.107 119.697C 124.272 119.905 124.539 120 124.804 120L 171.616 120C 172.838 120 173.894 119.555 174.783 118.667C 175.672 117.778 176.116 116.722 176.116 115.5L 176.116 109.333C 176.116 108.111 175.672 107.055 174.783 106.167C 173.894 105.278 172.838 104.833 171.616 104.833Z' />
    </svg>

    <Stylesheet sheet={sheet} />
  </div>
)

export default Loader
