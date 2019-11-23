import React from 'react';
import style from '../style.css';
import image from '../DICOM 1.png';

const Info = () => {
  return (
    <div>
      <h2>DICOM</h2>
      <div className="blocks">
        <div className="descr">
          Attempting to extract information from DICOM
          file:C:\Users\РњРёС…Р°РёР»\Desktop\РҐР°РєР°С‚РѕРЅ\DicomAnonimized\000aad99-320d-4d5f-8ea3-a9dae9ec215eZ13.dcm...
          (0008,0005) CS Specific Character Set 'ISO_IR 100' (0008,0008) CS
          Image Type 'ORIGINAL' (0008,0016) UI SOP Class UID
          '1.2.840.10008.5.1.4.1.1.1.1' (0008,0018) UI SOP Instance UID
          '2.25.198216361294359183993106360043301276886' (0008,0020) DA Study
          Date '' (0008,0023) DA Content Date '' (0008,0030) TM Study Time ''
          (0008,0033) TM Content Time '' (0008,0050) SH Accession Number ''
          (0008,0060) CS Modality 'DX' (0008,0068) CS Presentation Intent Type
          'FOR PRESENTATION' (0008,0070) LO Manufacturer '"GE Healthcare"'
          (0008,0090) PN Referring Physician's Name '' (0008,1090) LO
          Manufacturer's Model Name '"Definium 6000"' (0008,2218) SQ Anatomic
          Region Sequence '' (0010,0010) PN Patient's Name '' (0010,0020) LO
          Patient ID '' (0010,0030) DA Patient's Birth Date '' (0010,0040) CS
          Patient's Sex '' (0018,0015) CS Body Part Examined 'ANKLE' (0018,0060)
          DS KVP '65.000000' (0018,1020) LO Software Versions
          'dm_Platform_release-FW14_4A-2012' (0018,1110) DS Distance Source to
          Detector '1001.000000' (0018,1111) DS Distance Source to Patient
          '932.000000' (0018,1147) CS Field of View Shape 'RECTANGLE'
        </div>
        <div className="img">
          <div className="center">
            <img className="imgsrc" src={image}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
