import React, { Component } from 'react'
import Colors from '../Theme/Colors'
import AppStyles from '../Theme/AppStyles'
import { inject, observer } from 'mobx-react'
import IconAdd from 'react-icons/lib/md/add'
import IconClear from 'react-icons/lib/md/delete-forever'
import SidebarToggleButton from './SidebarToggleButton'

const TITLE = 'State Subscriptions'

const toolbarButton = {
  cursor: 'pointer'
}

const Styles = {
  container: {
    WebkitAppRegion: 'drag',
    backgroundColor: Colors.backgroundSubtleLight,
    borderBottom: `1px solid ${Colors.chromeLine}`,
    color: Colors.foregroundDark,
    boxShadow: `0px 0px 30px ${Colors.glow}`
  },
  content: {
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    ...AppStyles.Layout.hbox,
    justifyContent: 'space-between'
  },
  left: {
    ...AppStyles.Layout.hbox,
    width: 100,
    alignItems: 'center'
  },
  right: {
    width: 100,
    ...AppStyles.Layout.hbox,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  center: {
    ...AppStyles.Layout.vbox,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: Colors.foregroundLight,
    textAlign: 'center'
  },
  iconSize: 32,
  toolbarAdd: {
    ...toolbarButton
  },
  toolbarClear: {
    ...toolbarButton
  }
}

@inject('session')
@observer
class SubscriptionsHeader extends Component {
  render () {
    const { ui } = this.props.session

    return (
      <div style={Styles.container}>
        <div style={Styles.content}>
          <div style={Styles.left}>
            <SidebarToggleButton onClick={ui.toggleSidebar} isSidebarVisible={ui.isSidebarVisible} />
          </div>
          <div style={Styles.center}>
            <div style={Styles.title}>{TITLE}</div>
          </div>
          <div style={Styles.right}>
            <IconAdd
              size={Styles.iconSize}
              style={Styles.toolbarAdd}
              onClick={ui.openStateWatchDialog}
            />
            <IconClear
              size={Styles.iconSize}
              style={Styles.toolbarClear}
              onClick={ui.clearStateWatches}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SubscriptionsHeader
