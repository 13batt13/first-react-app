import styled from 'styled-components'
import { NavLink, useRouteMatch } from 'react-router-dom'

import {
  secondaryGrey,
  primaryLightCian,
  primaryCian,
} from '../../theme/colors'
import { text1_16 } from '../../theme/fonts'

const NavigationLink = ({ Icon, title, path }) => {
  const isActive = !!useRouteMatch({
    path,
  })

  const iconFill = isActive ? primaryCian : secondaryGrey

  return (
    <MenuItem isActiveLink={isActive} to={path}>
      <Icon fill={iconFill} />
      <MenuLink isActiveLink={isActive}>{title}</MenuLink>
    </MenuItem>
  )
}

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 15px;
  border-radius: 5px;
  text-decoration: none;
  :hover div {
    color: ${primaryCian};
  }
  ${({ isActiveLink }) =>
    isActiveLink && `background-color: ${primaryLightCian};`}
`
const MenuLink = styled.div`
  margin-left: 20px;
  ${text1_16};
  color: ${secondaryGrey};
  ${({ isActiveLink }) => isActiveLink && `color: ${primaryCian};`}
`

export default NavigationLink
