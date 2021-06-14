import axios from "axios";
import React, { useEffect, useState } from "react";

function Information() {

const [no, setNo] = useState('')
    
let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let currentDate = date_ob.toISOString().substring(0, 10);

let roman;

const convertRoman = (x) => {
    if(x === 1 ){
        return roman = 'I'
    }
    else if(x === 2) {
        return roman = 'II'
    }
    else if(x === 3) {
        return roman = 'III'
    }
    else if(x === 4) {
        return roman = 'IV'
    }
    else if(x === 5) {
        return roman = 'V'
    }
    else if(x === 6) {
        return roman = 'VI'
    }
    else if(x === 7) {
        return roman = 'VII'
    }
    else if(x === 8) {
        return roman = 'VIII'
    }
    else if(x === 9) {
        return roman = 'IX'
    }
    else if(x === 10) {
        return roman = 'X'
    }
    else if(x === 11) {
        return roman = 'XI'
    }
    else if(x === 12) {
        roman = 'XII'
    }
}

const info1 = `${year}0${month}`;
const fpb = `/FPB/205/${convertRoman(month)}/${year}`;

const hasil = `${info1}00${no+1}${fpb}`

useEffect(() => {
axios
    .get(
    "https://subsform-buana-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"
    )
    .then((x) => {
    setNo(Object.values(x.data).length)
    });
}, []);

return (
<>
    <div class="card text-white bg-dark-custom mb-3 card-custom">
    <div class="card-header">Informasi</div>
    <div class="card-body">
        <div class="mb-3">
        <label for="date" class="form-label">
            Tanggal
        </label>
        <input
            required
            type="date"
            class="form-control"
            id="date"
            value={currentDate}
        />
        </div>
        <div class="mb-3">
        <label for="no-fpb" class="form-label">
            No. FPB
        </label>
        <input required type="text" class="form-control" id="no-fpb" value={hasil} disabled/>
        </div>
        <div class="mb-3">
        <label for="no-cid" class="form-label">
            No. CID
        </label>
        <input required type="text" class="form-control" id="no-cid" value={info1} disabled/>
        </div>
    </div>
    </div>
</>
);
}

export default Information;
