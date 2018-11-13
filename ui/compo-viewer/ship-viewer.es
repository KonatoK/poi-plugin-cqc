import React, { PureComponent } from 'react'
import { PTyp } from '../../ptyp'
import { EquipViewer } from './equip-viewer'

class ShipViewer extends PureComponent {
  static propTypes = {
    ship: PTyp.object.isRequired,
    style: PTyp.object.isRequired,
  }

  render() {
    const {ship, style} = this.props
    var counter = 0;
    return (
      <div style={style}>
        <div style={{
          fontWeight: 'bold',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}>
          {window.i18n.resources.__(ship.name)}
        </div>
        <div style={{fontSize: '90%'}}>
          <span>Lv. {ship.level}</span>
          {
            ship.showLuck && (
              <span style={{marginLeft: '.5em'}}>
                Luck: {ship.luck}
              </span>
            )
          }
          {
            ship.slots.map(equip => (
              <EquipViewer
                key={equip.rstId}
                equip={equip}
                style={{}}
                slotSize={ship.planeSlots[counter++]}
              />
            ))
          }
          {
            ship.exSlot && (
              <EquipViewer
                key="ex"
                equip={ship.exSlot}
                style={{}}
                extra={true}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export { ShipViewer }
