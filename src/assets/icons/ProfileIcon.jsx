import { secondaryGrey } from '../../theme/colors'

const ProfileIcon = ({ width, height, fill }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.98833,2.87195c1.73361,0 3.13842,1.40482 3.13842,3.13842c0,1.73361 -1.40482,3.13842 -3.13842,3.13842c-1.73361,0 -3.13842,-1.40482 -3.13842,-3.13842c0,-1.73361 1.40482,-3.13842 3.13842,-3.13842zm0,13.45039c4.43863,0 9.11638,2.18195 9.11638,3.13842l0,1.64394l-18.23275,0l0,-1.64394c0,-0.95647 4.67775,-3.13842 9.11638,-3.13842zm0,-16.28992c-3.30282,0 -5.97795,2.67513 -5.97795,5.97795c0,3.30282 2.67513,5.97795 5.97795,5.97795c3.30282,0 5.97795,-2.67513 5.97795,-5.97795c0,-3.30282 -2.67513,-5.97795 -5.97795,-5.97795zm0,13.45039c-3.99028,0 -11.9559,2.00261 -11.9559,5.97795l0,2.98898c0,0.82197 0.67252,1.49449 1.49449,1.49449l20.92283,0c0.82197,0 1.49449,-0.67252 1.49449,-1.49449l0,-2.98898c0,-3.97534 -7.96562,-5.97795 -11.9559,-5.97795z"
      fill={fill}
    />
  </svg>
)

ProfileIcon.defaultProps = {
  width: '24',
  height: '24',
  fill: secondaryGrey,
}

export default ProfileIcon
