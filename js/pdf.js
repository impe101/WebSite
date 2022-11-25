window.onload = function () {
    document.getElementById("Download_Eng")
        .addEventListener("click", () => {
            const CV_ENG = this.document.getElementById("CV_ENG");
            console.log(CV_ENG);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'Imperatore Francesco - CV ENG.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(CV_ENG).set(opt).save();
        })
}