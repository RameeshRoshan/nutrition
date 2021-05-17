import React from 'react';

export default function Data({data}){
    let datalist={
        CAL :0,
        totalNutrients :{
            FAT    :0,
            FASAT  :0,
            FATRN  :0,
            CHOLE  :0,
            NA     :0,
            CHOCDF :0,
            FIBTG  :0,
            SUGAR  :0,
            PROCNT :0,
            VITD   :0,
            CA     :0,
            FE     :0,
            K      :0
        },
        totalDaily: {
            FAT   :0,
            FASAT :0,
            FATRN :0,
            CHOLE :0,
            NA    :0,
            CHOCDF:0,
            FIBTG :0,
            SUGAR :0,
            PROCNT:0,
            VITD  :0,
            CA    :0,
            FE    :0,
            K     :0
        },
        units : {
            FAT   :"",
            FASAT :"",
            FATRN :"",
            CHOLE :"",
            NA    :"",
            CHOCDF:"",
            FIBTG :"",
            SUGAR :"",
            PROCNT:"",
            VITD  :"",
            CA    :"",
            FE    :"",
            K     :""
        }
    }

    data.forEach(element => {
        if(!element.error){

        datalist.CAL+=element.calories? +element.calories.toFixed(1) :0;
        
        datalist.totalNutrients.FAT+= element.totalNutrients.FAT? +element.totalNutrients.FAT.quantity : 0;
        datalist.totalNutrients.FASAT+= element.totalNutrients.FASAT? +element.totalNutrients.FASAT.quantity : 0;
        datalist.totalNutrients.FATRN+= element.totalNutrients.FATRN? +element.totalNutrients.FATRN.quantity : 0;
        datalist.totalNutrients.CHOLE+= element.totalNutrients.CHOLE? +element.totalNutrients.CHOLE.quantity : 0;
        datalist.totalNutrients.NA+= element.totalNutrients.NA? +element.totalNutrients.NA.quantity : 0;
        datalist.totalNutrients.CHOCDF+= element.totalNutrients.CHOCDF? +element.totalNutrients.CHOCDF.quantity : 0;
        datalist.totalNutrients.FIBTG+= element.totalNutrients.FIBTG? +element.totalNutrients.FIBTG.quantity : 0;
        datalist.totalNutrients.SUGAR+= element.totalNutrients.SUGAR? +element.totalNutrients.SUGAR.quantity : 0;
        datalist.totalNutrients.PROCNT+= element.totalNutrients.PROCNT? +element.totalNutrients.PROCNT.quantity : 0;
        datalist.totalNutrients.VITD+= element.totalNutrients.VITD? +element.totalNutrients.VITD.quantity : 0;
        datalist.totalNutrients.CA+= element.totalNutrients.CA? +element.totalNutrients.CA.quantity : 0;
        datalist.totalNutrients.FE+= element.totalNutrients.FE? +element.totalNutrients.FE.quantity : 0;
        datalist.totalNutrients.K+= element.totalNutrients.K? +element.totalNutrients.K.quantity : 0;

        datalist.units.FAT = element.totalNutrients.FAT? element.totalNutrients.FAT.unit : datalist.units.FAT;
        datalist.units.FASAT = element.totalNutrients.FASAT? element.totalNutrients.FASAT.unit : datalist.units.FASAT;
        datalist.units.FATRN = element.totalNutrients.FATRN? element.totalNutrients.FATRN.unit : datalist.units.FATRN;
        datalist.units.CHOLE = element.totalNutrients.CHOLE? element.totalNutrients.CHOLE.unit : datalist.units.CHOLE;
        datalist.units.NA = element.totalNutrients.NA? element.totalNutrients.NA.unit : datalist.units.NA;
        datalist.units.CHOCDF = element.totalNutrients.CHOCDF? element.totalNutrients.CHOCDF.unit : datalist.units.CHOCDF;
        datalist.units.FIBTG = element.totalNutrients.FIBTG? element.totalNutrients.FIBTG.unit : datalist.units.FIBTG;
        datalist.units.SUGAR = element.totalNutrients.SUGAR? element.totalNutrients.SUGAR.unit : datalist.units.SUGAR;
        datalist.units.PROCNT = element.totalNutrients.PROCNT? element.totalNutrients.PROCNT.unit : datalist.units.PROCNT;
        datalist.units.VITD = element.totalNutrients.VITD? element.totalNutrients.VITD.unit : datalist.units.VITD;
        datalist.units.CA = element.totalNutrients.CA? element.totalNutrients.CA.unit : datalist.units.CA;
        datalist.units.FE = element.totalNutrients.FE? element.totalNutrients.FE.unit : datalist.units.FE;
        datalist.units.K = element.totalNutrients.K? element.totalNutrients.K.unit : datalist.units.K;

        datalist.totalDaily.FAT += element.totalDaily.FAT? +element.totalDaily.FAT.quantity : 0;
        datalist.totalDaily.FASAT += element.totalDaily.FASAT? +element.totalDaily.FASAT.quantity : 0;
        datalist.totalDaily.FATRN += element.totalDaily.FATRN? +element.totalDaily.FATRN.quantity : 0;
        datalist.totalDaily.CHOLE += element.totalDaily.CHOLE? +element.totalDaily.CHOLE.quantity : 0;
        datalist.totalDaily.NA += element.totalDaily.NA? +element.totalDaily.NA.quantity : 0;
        datalist.totalDaily.CHOCDF += element.totalDaily.CHOCDF? +element.totalDaily.CHOCDF.quantity : 0;
        datalist.totalDaily.FIBTG += element.totalDaily.FIBTG? +element.totalDaily.FIBTG.quantity : 0;
        datalist.totalDaily.SUGAR += element.totalDaily.SUGAR? +element.totalDaily.SUGAR.quantity : 0;
        datalist.totalDaily.PROCNT += element.totalDaily.PROCNT? +element.totalDaily.PROCNT.quantity : 0;
        datalist.totalDaily.VITD += element.totalDaily.VITD? +element.totalDaily.VITD.quantity : 0;
        datalist.totalDaily.CA += element.totalDaily.CA? +element.totalDaily.CA.quantity : 0;
        datalist.totalDaily.FE += element.totalDaily.FE? +element.totalDaily.FE.quantity : 0;
        datalist.totalDaily.K += element.totalDaily.K? +element.totalDaily.K.quantity : 0;
        }
    });

    return(
        <div className="table" >
            <table >
                <thead>
                    <tr className="heading row">
                        <th colSpan="3"className="center bottom" >Nutritional Analysis</th>
                    </tr>
                    <tr >
                        <th colSpan="3">Amount Per Serving</th>
                    </tr>   
                </thead>
                <tbody>
                    <tr >
                        <th colSpan="2" className="heading bottom"><b>Calories</b></th>
                        <td className="bottom" >{`${datalist.CAL.toFixed(1)}`}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="end small"><b>% Daily Value*</b></td>
                    </tr>
                    <tr className="bottom" >
                        <td ><b>Total Fat</b></td>
                        <td>{`${datalist.totalNutrients.FAT.toFixed(1)}${datalist.units.FAT}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.FAT.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <td colSpan=""> Saturated Fat</td>
                        <td>{`${datalist.totalNutrients.FASAT.toFixed(1)}${datalist.units.FASAT}`}</td>
                        <td className="end" ><b>{`${datalist.totalDaily.FASAT.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <td> Trans Fat </td>
                        <td>{`${datalist.totalNutrients.FATRN.toFixed(1)}${datalist.units.FATRN}`}</td>
                        <td className="end" ><b>{`${datalist.totalDaily.FATRN.toFixed(1)}%`}</b></td>	
                    </tr>
                    <tr>
                        <th colSpan=""><b>Cholesterol</b></th>
                        <td>{`${datalist.totalNutrients.CHOLE.toFixed(1)}${datalist.units.CHOLE}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.CHOLE.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <th colSpan=""><b>Sodium</b></th>
                        <td>{`${datalist.totalNutrients.NA.toFixed(1)}${datalist.units.NA}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.NA.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <th colSpan=""><b>Total Carbohydrate</b></th>
                        <td>{`${datalist.totalNutrients.CHOCDF.toFixed(1)}${datalist.units.CHOCDF}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.CHOCDF.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <td>Dietary Fiber</td>
                        <td>{`${datalist.totalNutrients.FIBTG.toFixed(1)}${datalist.units.FIBTG}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.FIBTG.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <td>Total Sugars -</td>
                        <td>{`${datalist.totalNutrients.SUGAR.toFixed(1)}${datalist.units.SUGAR}`}</td>
                        <td className="end" ></td>
                    </tr>
                    <tr>
                        <td>Includes - Added Sugars</td>
                    </tr>
                    <tr >
                        <th colSpan=""><b>Protein</b></th>
                        <td>{`${datalist.totalNutrients.PROCNT.toFixed(1)}${datalist.units.PROCNT}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.PROCNT.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <th>Vitamin D</th>
                        <td>{`${datalist.totalNutrients.VITD.toFixed(1)}${datalist.units.VITD}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.VITD.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <th>Calcium</th>
                        <td>{`${datalist.totalNutrients.CA.toFixed(1)}${datalist.units.CA}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.CA.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <th>Iron</th>
                        <td>{`${datalist.totalNutrients.FE.toFixed(1)}${datalist.units.FE}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.FE.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr>
                        <th>Potassium</th>
                        <td>{`${datalist.totalNutrients.K.toFixed(1)}${datalist.units.K}`}</td>
                        <td className="end"><b>{`${datalist.totalDaily.K.toFixed(1)}%`}</b></td>
                    </tr>
                    <tr colSpan="3"><td className="extrasmall">*Percent Daily Values are based on a 2000 calorie diet</td></tr>
                </tbody>
            </table>
        </div>
    );
}