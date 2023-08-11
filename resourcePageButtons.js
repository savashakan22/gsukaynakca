let departmentChoice = "";

document.querySelector(".departments").addEventListener("click", event => {
    if(event.target.id === "ceng") departmentChoice = "ceng";
    if(event.target.id === "endustri") departmentChoice = "endustri";
    if(event.target.id === "isletme") departmentChoice = "isletme";
    if(event.target.id === "ekonomi") departmentChoice = "ekonomi";
    if(event.target.id === "felsefe") departmentChoice = "felsefe";
    if(event.target.id === "hukuk") departmentChoice = "hukuk";
    if(event.target.id === "iktisat") departmentChoice = "iktisat";
    if(event.target.id === "iletisim") departmentChoice = "iletisim";
    if(event.target.id === "uluslararasi") departmentChoice = "uluslararasi";
    if(event.target.id === "matematik") departmentChoice = "matematik";
    if(event.target.id === "siyaset") departmentChoice = "siyaset";
    if(event.target.id === "sosyoloji") departmentChoice = "sosyoloji";
});

//----------------------------------------------------

window.semChoice = "";

document.querySelector('.semesters').addEventListener('click', event => {
    if(event.target.id === 'sem1') {
        console.log(departmentChoice);
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="ING106" class="buttons">mat 1</button>
                    <button id="ING116" class="buttons">fizik 1</button>
                    <button id="ING127" class="buttons">kimya</button>
                    <button id="INF112" class="buttons">prog. giris</button>
                    <button id="INF113" class="buttons">bilg. muh. giris</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }
    }

    if(event.target.id === 'sem2') {
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="ING107" class="buttons">mat 2</button>
                    <button id="ING117" class="buttons">fizik 2</button>
                    <button id="ING114" class="buttons">algo.</button>
                    <button id="INF115" class="buttons">prog. prensipleri</button>
                    <button id="INF116" class="buttons">bilg. sis. giris</button>
                    <button id="INF144" class="buttons">teknik resim</button>
                    <button id="CNT120" class="buttons">kariyer planlama</button>
                    <button id="TUR002" class="buttons">turk dili 2</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }       
    }

    if(event.target.id === 'sem3') {
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="ING251" class="buttons">yuk. mat. 1</button>
                    <button id="ING207" class="buttons">lineer cebir</button>
                    <button id="INF204" class="buttons">elek. dalgalar</button>
                    <button id="INF246" class="buttons">prog. uyg.</button>
                    <button id="INF224" class="buttons">veri yap. ve algo.</button>
                    <button id="ING229" class="buttons">analog elek.</button>
                    <button id="ATA001" class="buttons">inkilap 1</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }       
    }

    if(event.target.id === 'sem4') {
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="ING252" class="buttons">yuk. mat. 2</button>
                    <button id="ING208" class="buttons">diferansiyel</button>
                    <button id="INF211" class="buttons">olasilik</button>
                    <button id="ING220" class="buttons">sayisal elek.</button>
                    <button id="INF243" class="buttons">nesneye yonelik prog.</button>
                    <button id="ATA002" class="buttons">inkilap 2</button>
                    <button id="ING291" class="buttons">staj</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }        
    }

    if(event.target.id === 'sem5') {
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="INF356" class="buttons">veri analizi</button>
                    <button id="INF324" class="buttons">ilis. veri tabanlari</button>
                    <button id="INF315" class="buttons">kesikli mat.</button>
                    <button id="INF316" class="buttons">sinyaller ve sis.</button>
                    <button id="INF320" class="buttons">bilg. mimarisi</button>
                    <button id="CNT350" class="buttons">proje, risk, degisiklik</button>
                    <button id="INF352" class="buttons">insan bilg. etk.</button>
                    <button id="INF353" class="buttons">web prog.</button>
                    <button id="INF354" class="buttons">oyun teorisi</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }
    }

    if(event.target.id === 'sem6') {
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="INF323" class="buttons">otom. ve diller teorisi</button>
                    <button id="INF333" class="buttons">isletim sistemleri</button>
                    <button id="INF325" class="buttons">sayisal analiz</button>
                    <button id="INF340" class="buttons">mikroislemciler</button>
                    <button id="INF334" class="buttons">bilgisayar aglari</button>
                    <button id="INF345" class="buttons">sayisal isaret isleme</button>
                    <button id="INF360" class="buttons">veritabani yonetimi</button>
                    <button id="INF365" class="buttons">bilgi teorisi</button>
                    <button id="INF399" class="buttons">staj</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }     
    }

    if(event.target.id === 'sem7') {
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="INF443" class="buttons">dagitik sistemler</button>
                    <button id="INF400" class="buttons">veri derlemesi</button>
                    <button id="INF444" class="buttons">yapay zeka</button>
                    <button id="INF470" class="buttons">bilgisayar ag laboratuvari</button>
                    <button id="INF493" class="buttons">arastirma konulari</button>
                    <button id="INF471" class="buttons">bilisimde guvenlik</button>
                    <button id="INF438" class="buttons">ileri veri tabanlari</button>
                    <button id="INF430" class="buttons">robotik</button>
                    <button id="INF432" class="buttons">bilgisayar grafikleri</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }       
    }

    if(event.target.id === 'sem8') {
        if(departmentChoice == "ceng") {
            window.semChoice = `
                <div id="buttonGrid">
                    <button id="INF481" class="buttons">yazilim muhendisligi</button>
                    <button id="INF482" class="buttons">gomulu sistem tasarim</button>
                    <button id="INF494" class="buttons">bitirme projesi</button>
                    <button id="IND471" class="buttons">yoneylem arastirmasi</button>
                    <button id="IND472" class="buttons">muhendislik ekonomisi</button>
                    <button id="INF483" class="buttons">bilgi cikarimi ve veri madenciligi</button>
                    <button id="INF437" class="buttons">sistem muhendisligi</button>
                    <button id="INF446" class="buttons">ozel konular</button>
                    <button id="INF441" class="buttons">sifrelemeye giris</button>
                    <button id="CNT417" class="buttons">girisimcilik</button>
                    <button id="CNT416" class="buttons">sosyal medya</button>
                    <button id="CNT411" class="buttons">fotografcilik</button>
                </div>`;
        }
        else {
            alert("ceng okumak zorunlu");
            window.semChoice = "";
        }   
    }

});

//-----------------------------------------------------------------------

let classChoice = "";

document.querySelector(".classes").addEventListener("click", event => {
    if(event.target.id === "ING106") classChoice = "ING106";
    else if(event.target.id === "ING116") classChoice = "ING106";
    else if(event.target.id === "ING127") classChoice = "ING106";
    else if(event.target.id === "INF112") classChoice = "ING106";
    else if(event.target.id === "INF113") classChoice = "ING106";
    else if(event.target.id === "ING107") classChoice = "ING107";
    else if(event.target.id === "ING117") classChoice = "ING117";
    else if(event.target.id === "ING114") classChoice = "ING114";
    else if(event.target.id === "INF115") classChoice = "INF115";
    else if(event.target.id === "INF116") classChoice = "INF116";
    else if(event.target.id === "INF144") classChoice = "INF144";
    else if(event.target.id === "CNT120") classChoice = "CNT120";
    else if(event.target.id === "TUR002") classChoice = "TUR002";
    else if(event.target.id === "ING251") classChoice = "ING251";
    else if(event.target.id === "ING207") classChoice = "ING207";
    else if(event.target.id === "INF204") classChoice = "INF204";
    else if(event.target.id === "INF246") classChoice = "INF246";
    else if(event.target.id === "INF224") classChoice = "INF224";
    else if(event.target.id === "ING229") classChoice = "ING229";
    else if(event.target.id === "ATA001") classChoice = "ATA001";
    else if(event.target.id === "ING252") classChoice = "ING252";
    else if(event.target.id === "ING208") classChoice = "ING208";
    else if(event.target.id === "INF211") classChoice = "INF211";
    else if(event.target.id === "ING220") classChoice = "ING220";
    else if(event.target.id === "INF243") classChoice = "INF243";
    else if(event.target.id === "ATA002") classChoice = "ATA002";
    else if(event.target.id === "ING291") classChoice = "ING291";
    else if(event.target.id === "INF356") classChoice = "INF356";
    else if(event.target.id === "INF324") classChoice = "INF324";
    else if(event.target.id === "INF315") classChoice = "INF315";
    else if(event.target.id === "INF316") classChoice = "INF316";
    else if(event.target.id === "INF320") classChoice = "INF320";
    else if(event.target.id === "CNT350") classChoice = "CNT350";
    else if(event.target.id === "INF352") classChoice = "INF352";
    else if(event.target.id === "INF353") classChoice = "INF353";
    else if(event.target.id === "INF354") classChoice = "INF354";
    else if(event.target.id === "INF323") classChoice = "INF323";
    else if(event.target.id === "INF333") classChoice = "INF333";
    else if(event.target.id === "INF325") classChoice = "INF325";
    else if(event.target.id === "INF340") classChoice = "INF340";
    else if(event.target.id === "INF334") classChoice = "INF334";
    else if(event.target.id === "INF345") classChoice = "INF345";
    else if(event.target.id === "INF360") classChoice = "INF360";
    else if(event.target.id === "INF365") classChoice = "INF365";
    else if(event.target.id === "INF399") classChoice = "INF399";
    else if(event.target.id === "INF443") classChoice = "INF443";
    else if(event.target.id === "INF400") classChoice = "INF400";
    else if(event.target.id === "INF444") classChoice = "INF444";
    else if(event.target.id === "INF470") classChoice = "INF470";
    else if(event.target.id === "INF493") classChoice = "INF493";
    else if(event.target.id === "INF471") classChoice = "INF471";
    else if(event.target.id === "INF438") classChoice = "INF438";
    else if(event.target.id === "INF430") classChoice = "INF430";
    else if(event.target.id === "INF432") classChoice = "INF432";
    else if(event.target.id === "INF481") classChoice = "INF481";
    else if(event.target.id === "INF482") classChoice = "INF482";
    else if(event.target.id === "INF494") classChoice = "INF494";
    else if(event.target.id === "IND471") classChoice = "IND471";
    else if(event.target.id === "IND472") classChoice = "IND472";
    else if(event.target.id === "INF483") classChoice = "INF483";
    else if(event.target.id === "INF437") classChoice = "INF437";
    else if(event.target.id === "INF446") classChoice = "INF446";
    else if(event.target.id === "INF441") classChoice = "INF441";
    else if(event.target.id === "CNT417") classChoice = "CNT417";
    else if(event.target.id === "CNT416") classChoice = "CNT416";
    else if(event.target.id === "CNT411") classChoice = "CNT411";
});

//-------------------------------------------------------------

let yearChoice = "";

document.querySelector(".years").addEventListener("click", event => {
    if (event.target.id === "year2023")
    {
        yearChoice = "2023";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2022")
    {
        yearChoice = "2022";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2021") 
    {
        yearChoice = "2021";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2020") 
    {
        yearChoice = "2020";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2019") 
    {
        yearChoice = "2019";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2018") 
    {
        yearChoice = "2018";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2017") 
    {
        yearChoice = "2017";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2016") 
    {
        yearChoice = "2016";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2015") 
    {
        yearChoice = "2015";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2014") 
    {
        yearChoice = "2014";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2013") 
    {
        yearChoice = "2013";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
    else if (event.target.id === "year2012") 
    {
        yearChoice = "2012";
        alert(`file: ${departmentChoice}-${classChoice}-${yearChoice}`);
    }
});


