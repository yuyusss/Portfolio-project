import React,{useState} from 'react';
import DaumPostcode from "react-daum-postcode";
import './SignUp.scss';

const PopupPostCode = (props) => {

  const[text,setText]=useState('')
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        

        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        
        console.log(fullAddress)
        
        props.setDaumAddress(fullAddress)
         
        setText(fullAddress)
         
         
         props.onClose()
    }
    
    
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "10%",
        width: "600px",
        height: "600px",
        border: "2px solid black"
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />

            <button type='button' onClick={() => {props.onClose()}}  className='postCode_btn'>닫기</button>
        </div>
    )
}
 
export default PopupPostCode;