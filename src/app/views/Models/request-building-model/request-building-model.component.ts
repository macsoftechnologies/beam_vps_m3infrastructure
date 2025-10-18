import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PDFDocumentProxy } from "ng2-pdf-viewer";
import { GetZoneStatusDto } from '../Zone-statusDto';
import { ZoneStatusService } from 'app/shared/services/zone-status.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-building-model',
  templateUrl: './request-building-model.component.html',
  styleUrls: ['./request-building-model.component.css']
})
export class RequestBuildingModelComponent implements OnInit {
  floorBlock: Array<any> = [];
  selectedBlock: Array<any> = [];
loadingZones: Set<string> = new Set();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<RequestBuildingModelComponent>,
      private ZoneStatusservice: ZoneStatusService,
      private _snackBar: MatSnackBar,
      private cdr: ChangeDetectorRef) {

  }

      GetZoneStatus: GetZoneStatusDto =
        {
        building_id: null,
        level: null,
        zone: null,
      }

  ngOnInit(): void {
    let selectedBlockData = this.data.selectFloorBlocks.find(item => (item.planType == this.data.floor.planType) && (item.floorName == this.data.floor.name))
    console.log(selectedBlockData, "selectedBlockData")
    if (this.data.floor.name == 'BA-DD Zones' && this.data.floor.planType == 'BA-DD Zone 1 - Zone 2') {

      this.floorBlock = [
        {
          value: 'ZONE 1',
          className: "zone-1-1-ba",
          isSelected: false
        },
        {
          value: 'ZONE 2',
          className: "zone-2-1-ba",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "1")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'EC-JCP1 Zones' && this.data.floor.planType == 'EC-JCP1 Zone 1 - Zone 2') {
      this.floorBlock = [
        {
          value: 'ZONE 1',
          className: "zone-1-1-ec",
          isSelected: false
        },
        {
          value: 'ZONE 2',
          className: "zone-2-1-ec",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }


    // Hovvej east
    else if (this.data.floor.name == 'HovvejEast Zones' && this.data.floor.planType == 'HovvejEast Zone 1 - Zone 2') {
      this.floorBlock = [
        {
          value: 'ZONE 1',
          className: "zone-1-1-east",
          isSelected: false
        },
        {
          value: 'ZONE 2',
          className: "zone-2-1-east",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    // Hovvej west
    else if (this.data.floor.name == 'HovvejWest Zones' && this.data.floor.planType == 'HovvejWest Zone 1 - Zone 2') {
      this.floorBlock = [
        {
          value: 'ZONE 1',
          className: "zone-1-1-west",
          isSelected: false
        },
        {
          value: 'ZONE 2',
          className: "zone-2-1-west",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }


    // nn east

    else if (this.data.floor.name == 'NN East Zones' && this.data.floor.planType == 'NN East Site-Plan') {
      this.floorBlock = [
        {
          value: 'M3 North Zone 3',
          className: "M3NorthZone3",
          isSelected: false
        },
        {
          value: 'M3 South Zone 2',
          className: "M3SouthZone2",
          isSelected: false
        },
        {
          value: 'M3 South Zone 3',
          className: "M3SouthZone3",
          isSelected: false
        },
        {
          value: 'Parking area',
          className: "Parkingarea",
          isSelected: false
        },
        {
          value: 'NON M3 AREA',
          className: "NONM3AREA",
          isSelected: false
        },
        {
          value: 'Gate Entrance',
          className: "gate-entrance",
          isSelected: false
        },
        {
          value: 'Gate Exit',
          className: "gate-exit",
          isSelected: false
        },


      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }


    //p-hus
    else if (this.data.floor.name == 'P-hus Zones' && this.data.floor.planType == 'P-hus Site-Plan') {
      this.floorBlock = [
        {
          value: 'Zone 1',
          className: "Zone-1-phus",
          isSelected: false
        },
        {
          value: 'Zone 2',
          className: "Zone-2-phus",
          isSelected: false
        },
        {
          value: 'Zone 3',
          className: "Zone-3-phus",
          isSelected: false
        },
        {
          value: 'Zone 4',
          className: "Zone-4-phus",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }


    // park

    else if (this.data.floor.name == 'M3 North 2' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'M3 North 2',
          className: "M3-North-area-2-1",
          isSelected: false
        },{
          value: 'Tent 10',
          className: "M3-North-area-2-2",
          isSelected: false
        },
        {
          value: 'Tent 15',
          className: "M3-North-area-2-3",
          isSelected: false
        },
        {
          value: 'Tent 14',
          className: "M3-North-area-2-4",
          isSelected: false
        },
        {
          value: 'Tent 11',
          className: "M3-North-area-2-5",
          isSelected: false
        },
        {
          value: 'Tent 13',
          className: "M3-North-area-2-6",
          isSelected: false
        },
      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'M3 South 1' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'M3 South 1',
          className: "M3-South-area-1",
          isSelected: false
        }
      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'M3 North 1' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'M3 North 1',
          className: "M3-North-area-1-1",
          isSelected: false
        },{
          value: 'Tent 9',
          className: "M3-North-area-1-2",
          isSelected: false
        },{
          value: 'Tent 12',
          className: "M3-North-area-1-3",
          isSelected: false
        }

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Tscherning area' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'Tscherning area',
          className: "RendsborgPark-Tscherning-area",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Office & Welfare cabin area' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'Office and Welfare cabin area',
          className: "Office-Welfare",
          isSelected: false
        },
        {
          value: 'Tent 16',
          className: "Office-Welfare-1",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Rendsborg Parking 1' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'Rendsborg Parking 1',
          className: "Parking-1",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Rendsborg Parking 2' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'Rendsborg Parking 2',
          className: "Parking-2",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Rendsborg Parking 3' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'Rendsborg Parking 3',
          className: "Parking-3",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Rendsborg Tent' && this.data.floor.planType == 'Rendsborg Park') {
      this.floorBlock = [
        {
          value: 'Tent 1',
          className: "Park-tent-1",
          isSelected: false
        },
        {
          value: 'Tent 2',
          className: "Park-tent-2",
          isSelected: false
        },
        {
          value: 'Tent 3',
          className: "Park-tent-3",
          isSelected: false
        },
        {
          value: 'Tent 4',
          className: "Park-tent-4",
          isSelected: false
        },
        {
          value: 'Tent 5',
          className: "Park-tent-5",
          isSelected: false
        },
        {
          value: 'Tent 6',
          className: "Park-tent-6",
          isSelected: false
        },
        {
          value: 'Tent 7',
          className: "Park-tent-7",
          isSelected: false
        },
        {
          value: 'Tent 8',
          className: "Park-tent-8",
          isSelected: false
        },

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    // end rendsborg park

    // start eh lake east

    else if (this.data.floor.name == 'EHLakeEast Zones' && this.data.floor.planType == 'EH Lake East') {
      this.floorBlock = [
        {
          value: 'Zone 1',
          className: "Zone-1-EHLakeEast",
          isSelected: false
        },
        {
          value: 'Zone 2',
          className: "Zone-2-EHLakeEast",
          isSelected: false
        },
       

      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    // ends eh lake east

    // start eh lake west

    else if (this.data.floor.name == 'EHLakeWest Zones' && this.data.floor.planType == 'EH Lake West') {
          this.floorBlock = [
            {
              value: 'Zone 1',
              className: "Zone-1-EHLakeWest",
              isSelected: false
            },
            {
              value: 'Zone 2',
              className: "Zone-2-EHLakeWest",
              isSelected: false
            },
            {
              value: 'Zone 3',
              className: "Zone-3-EHLakeWest",
              isSelected: false
            },
           
    
          ]
          if (selectedBlockData) {
            if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
              console.log(selectedBlockData, "2")
              this.floorBlock = selectedBlockData.selectedBlock;
            }
          }
    }
    
    // ends eh lake west

    // start eh lake west

    else if (this.data.floor.name == 'APM Terminal Zones' && this.data.floor.planType == 'APM Terminal') {
          this.floorBlock = [
            {
              value: 'M3 North',
              className: "APM-Terminal-1",
              isSelected: false
            },
            {
              value: 'M3 South',
              className: "APM-Terminal-2",
              isSelected: false
            },    
          ]
          if (selectedBlockData) {
            if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
              console.log(selectedBlockData, "2")
              this.floorBlock = selectedBlockData.selectedBlock;
            }
          }
    }
    
    // ends eh lake west
    

    // console.log(this.data);
  }

 selectIndividualFloor(selectedBlock: any, isChecked: boolean, zoneName: string, level: string) {
  // Load existing selections from localStorage
  let globalSelected = JSON.parse(localStorage.getItem('globalSelectedBlocks') || '[]');

  if (isChecked) {
    // ✅ Add the selection
    globalSelected.push({ level, value: selectedBlock.value });
    this.GetZonestatus(zoneName, level, selectedBlock?.value, selectedBlock);
  } else {
    // ❌ Remove the selection
    globalSelected = globalSelected.filter(
      (b: any) => !(b.level === level && b.value === selectedBlock.value)
    );
     const index = this.selectedBlock.findIndex(item => item.value === selectedBlock.value);
    if (index > -1) this.selectedBlock.splice(index, 1);
    selectedBlock.isSelected = false;
  }

  // Save updated list back
  if (globalSelected.length > 0) {
    localStorage.setItem('globalSelectedBlocks', JSON.stringify(globalSelected));
  } else {
    // 🗑 If no zones are selected anywhere → clear both
    localStorage.removeItem('firstZoneStatus');
    localStorage.removeItem('globalSelectedBlocks');
  }
}





GetZonestatus(zoneName: string, level: string, area: string, selectedBlock: any) {
  console.log("📡 GetZonestatus called for:", selectedBlock.value);

  this.GetZoneStatus.building_id = this.data.buildingId;
  this.GetZoneStatus.level = level;
  this.GetZoneStatus.zone = zoneName;

  this.ZoneStatusservice.GetIndividualZone(this.GetZoneStatus).subscribe((res: any) => {
    console.log("📥 API response for", selectedBlock.value, ":", res);
    this.loadingZones.delete(selectedBlock.value);

    if (res && res.length > 0) {
      if(res[0].status == "HO") {
        this.openSnackBar("Can't select zone with Hand over status");
        selectedBlock.isSelected = false;
        this.cdr.detectChanges(); 
      } else {
      this.handleZoneStatus(res[0].status, selectedBlock, level);
      }
    } else {
      this.openSnackBar("Can't select zone without status");
      selectedBlock.isSelected = false;
      this.cdr.detectChanges(); 
    }
  });
}

trackByValue(index, item) {
  return item.value;
}

// handleZoneStatus(status: string, selectedBlock: any) {
//   let firstZoneStatus = localStorage.getItem('firstZoneStatus');
//   console.log('🔹 firstZoneStatus from localStorage:', firstZoneStatus);

//   if (!firstZoneStatus && (status === 'UC' || status === 'C')) {
//     console.log('⚡ Setting firstZoneStatus in localStorage to:', status);
//     localStorage.setItem('firstZoneStatus', status);
//     firstZoneStatus = status;
//   }

//   if (status !== firstZoneStatus) {
//     console.log('❌ Status mismatch, blocking selection:', status, '!==', firstZoneStatus);
//     let ZoneStatus: string;
//       if(firstZoneStatus == 'UC') {
//         ZoneStatus = 'Construction';
//       } else if(firstZoneStatus == 'C') {
//         ZoneStatus = 'Commissioning';
//       }
//     this.openSnackBar(`You can only select zones with status ${ZoneStatus}`);

//     // Force immediate uncheck
//     selectedBlock.isSelected = false;
//     this.cdr.detectChanges();   // 👈 ensures UI updates immediately
//     return;
//   }

//   // Allow selection
//   if (!this.selectedBlock.some(z => z.value === selectedBlock.value)) {
//     this.selectedBlock.push(selectedBlock);
//   }
//   selectedBlock.isSelected = true;

//   console.log('✅ Current selectedBlock after handling:', this.selectedBlock);
// }

handleZoneStatus(status: string, selectedBlock: any, level: string) {
  let firstZoneStatus = localStorage.getItem('firstZoneStatus');
  console.log('🔹 firstZoneStatus from localStorage:', firstZoneStatus);
  let globalSelected = JSON.parse(localStorage.getItem('globalSelectedBlocks') || '[]');
  // CASE 1: First selection
  if (!firstZoneStatus && (status === 'UC' || status === 'C')) {
    localStorage.setItem('firstZoneStatus', status);
    firstZoneStatus = status;
  }

  // CASE 2: Mismatch
  if (status !== firstZoneStatus) {
    let ZoneStatus =
      firstZoneStatus === 'UC'
        ? 'Construction'
        : firstZoneStatus === 'C'
        ? 'Commissioning'
        : firstZoneStatus ?? 'Unknown';

    this.openSnackBar(`You can only select zones with status ${ZoneStatus}`);
    globalSelected = globalSelected.filter(
      (b: any) => !(b.level === level && b.value === selectedBlock.value)
    );
    selectedBlock.isSelected = false;
    localStorage.setItem('globalSelectedBlocks', JSON.stringify(globalSelected));
    this.cdr.detectChanges();
    return;
  }

  // CASE 3: Valid selection
  if (!this.selectedBlock.some(item => item.value === selectedBlock.value)) {
    this.selectedBlock.push(selectedBlock);
  }
  selectedBlock.isSelected = true;
}



  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,
    });
  }

  // onSubmitSelectedBlock(){

  // }

  setFloorData(selectedBlock, planType, floorName) {
  console.log("setting floor data....");

  const floorStatus = localStorage.getItem('firstZoneStatus');
  this.GetZoneStatus.building_id = this.data.buildingId;
  this.GetZoneStatus.level = planType;
  this.GetZoneStatus.zone = floorName;

  this.ZoneStatusservice.GetIndividualZone(this.GetZoneStatus).subscribe((res: any) => {
    if (res && res.length > 0 && res[0].status === floorStatus) {
      this.dialogRef.close({
        selectedBlock,
        planType,
        floorName,
        floorStatus
      }); // ✅ Pass result back
    } else {
      this.dialogRef.close({
        selectedBlock,
        planType,
        floorName,
      });
    }
  });
}
}
