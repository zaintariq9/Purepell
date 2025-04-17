function calculate() {
            // Input values
            let totalPatients = parseInt(document.getElementById("totalPatients").value) || 0;

            let femalePercentage = parseFloat(document.getElementById("femalePercentage").value) / 100 || 0;
            let malePercentage = parseFloat(document.getElementById("malePercentage").value) / 100 || 0;
            let patientsWithSymptoms = parseFloat(document.getElementById("patientsWithSymptoms").value) / 100 || 0;

            let newPatientsMonth1 = parseInt(document.getElementById("newPatientsMonth1").value) || 0;
            let newPatientsMonth2 = parseInt(document.getElementById("newPatientsMonth2").value) || 0;
            let newPatientsMonth3 = parseInt(document.getElementById("newPatientsMonth3").value) || 0;
            let newPatientsMonths4To12 = parseInt(document.getElementById("newPatientsMonths4To12").value) || 0;

            let newPatientsYear2 = parseInt(document.getElementById("newPatientsYear2").value) || 0;
            let newPatientsYear3 = parseInt(document.getElementById("newPatientsYear3").value) || 0;

            let retentionRate = 80;
            let femaleFrequency = 4;
            let maleFrequency = 6;

            // Derived calculations
            let potentialPatients = Math.round(totalPatients * patientsWithSymptoms);
            document.getElementById("potentialPatients").innerText = potentialPatients;

            let totalNewPatients = newPatientsMonth1 + newPatientsMonth2 + newPatientsMonth3 + (newPatientsMonths4To12 * 9) + (newPatientsYear2 * 12) + (newPatientsYear3 * 12);
            document.getElementById("totalNewPatients").innerText = totalNewPatients;

            let totalNewPatients2 = newPatientsMonth1 + newPatientsMonth2 + newPatientsMonth3 + (newPatientsMonths4To12 * 9) + (newPatientsYear2 * 12) + (newPatientsYear3 * 12);
            document.getElementById("totalNewPatients2").innerText = totalNewPatients2;

            let femalePatients = Math.round(totalPatients * femalePercentage);
            let malePatients = totalPatients - femalePatients;
            document.getElementById("femalePatients").innerText = femalePatients;
            document.getElementById("malePatients").innerText = malePatients;

            // Total female patients over three years
            let totalFemalePatientsYear1 =femalePercentage * retentionRate * femaleFrequency* (newPatientsMonth1 + newPatientsMonth2 + newPatientsMonth3 + newPatientsMonths4To12 * 9);
            let totalFemalePatientsYear2 = totalFemalePatientsYear1 + (newPatientsYear2* 12 * femalePercentage * retentionRate * femaleFrequency);
            let totalFemalePatientsYear3 = totalFemalePatientsYear1 + totalFemalePatientsYear2 + (((newPatientsYear3*12 * femalePercentage) - (newPatientsYear3* femaleFrequency * femalePercentage)) * retentionRate * femaleFrequency);
            document.getElementById("totalFemalePatientsYear1").innerText = totalFemalePatientsYear1;
            document.getElementById("totalFemalePatientsYear2").innerText = totalFemalePatientsYear2;
            document.getElementById("totalFemalePatientsYear3").innerText = totalFemalePatientsYear3;

            // Total male patients over three years
            let totalMalePatientsYear1 = malePercentage * retentionRate * maleFrequency * (newPatientsMonth1 + newPatientsMonth2 + newPatientsMonth3 + newPatientsMonths4To12 * 9);
            let totalMalePatientsYear2 = totalMalePatientsYear1 + (newPatientsYear2 * 12 * malePercentage * retentionRate * maleFrequency);
            let totalMalePatientsYear3 = totalMalePatientsYear1 + totalMalePatientsYear2 + (((newPatientsYear3 * 12 * malePercentage) - (newPatientsYear3 * maleFrequency * malePercentage)) * retentionRate * maleFrequency);
            document.getElementById("totalMalePatientsYear1").innerText = totalMalePatientsYear1;
            document.getElementById("totalMalePatientsYear2").innerText = totalMalePatientsYear2;
            document.getElementById("totalMalePatientsYear3").innerText = totalMalePatientsYear3;

            // Total procedures calculation
            let totalProcedures = totalFemalePatientsYear3 + totalMalePatientsYear3;
            document.getElementById("totalProcedures").innerText = Math.round(totalProcedures);


            // Financial Data
            // let femaleProcedureIncome = parseInt(document.getElementById("femaleProcedureIncome").value) || 0;
            let femaleProcedureIncome = 400;
            // let maleProcedureIncome = parseInt(document.getElementById("maleProcedureIncome").value) || 0;
            let maleProcedureIncome = 800;

            let procedureRevenue = (femaleProcedureIncome * totalFemalePatientsYear3) + (maleProcedureIncome * totalMalePatientsYear3);
            document.getElementById("procedureRevenue").innerText = procedureRevenue;

            // let femaleProcedureCost = parseInt(document.getElementById("femaleProcedureCost").value) || 0;
            let femaleProcedureCost = 150;
            // let maleProcedureCost = parseInt(document.getElementById("maleProcedureCost").value) || 0;
            let maleProcedureCost = 350;

            let procedureCost = (femaleProcedureCost * totalFemalePatientsYear3) + (maleProcedureCost * totalMalePatientsYear3);
            document.getElementById("procedureCost").innerText = procedureCost;

            let procedureProfit = procedureRevenue - procedureCost;
            document.getElementById("procedureProfit").innerText = procedureProfit;

            // Additional Revenue and Costs Calculations
            // let nutraceuticalUptake = parseFloat(document.getElementById("nutraceuticalUptake").value) || 0;
            let nutraceuticalUptake = 80;
            // let supplementIncome = parseInt(document.getElementById("supplementIncome").value) || 0;
            let supplementIncome = 100;
            let newPatients = totalNewPatients;

            
            let PatientsPenetration = (newPatients/totalPatients)*100;
            document.getElementById("PatientsPenetration").innerText = PatientsPenetration.toFixed(2);

            let supplementRevenue = supplementIncome * nutraceuticalUptake/100 * totalProcedures;
            document.getElementById("supplementRevenue").innerText = supplementRevenue;


            // consultFees Custom Functionality 

            const consultFeesDropdown = document.getElementById("consultFees");
            const customConsultFeeInput = document.getElementById("customConsultFee");
            let consultFees = consultFeesDropdown.value === "250" ? parseInt(customConsultFeeInput.value) || 0 : 0;

            // consultFees Custom Functionality 


            let consultRevenue = consultFees * newPatients;
            document.getElementById("consultRevenue").innerText = consultRevenue;

            let labMarkup = 150;


            // labFees Custom Functionality 

            const labFeesDropdown = document.getElementById("labFees");
            const customLabFeeInput = document.getElementById("customLabFee");
            let labFees = labFeesDropdown.value === "150" ? parseInt(customLabFeeInput.value) || 0 : 0;

            // labFees Custom Functionality

            let labRevenue = (labFees > 0 ? labFees : labMarkup) * newPatients;
            document.getElementById("labRevenue").innerText = labRevenue;

            let trocarCost = parseInt(document.getElementById("trocarCost").value) || 0;
            let totaltrocarcost = trocarCost * totalProcedures;
            document.getElementById("totaltrocarcost").innerText = totaltrocarcost;

            let procedureIncome = procedureRevenue + supplementRevenue + consultRevenue + labRevenue;
            document.getElementById("totalIncome").innerText = procedureIncome;

            let averageRevenuePerProcedure = procedureIncome / totalProcedures;
            document.getElementById("avgRevenuePerProcedure").innerText = averageRevenuePerProcedure;

            // let startupFees = parseInt(document.getElementById("startupFees").value) || 0;
            let startupFees = 3000;
            let Profit = procedureIncome - totaltrocarcost - startupFees - supplementRevenue;
            document.getElementById("Profit").innerText = Profit;

            let averageProfitPerProcedure = Profit / totalProcedures;
            document.getElementById("avgProfitPerProcedure").innerText = averageProfitPerProcedure;

            // Supplement Revenue by Procedure
            let supplementRevenuePerProcedure = supplementRevenue / totalProcedures;
            document.getElementById("supplementRevenuePerProcedure").innerText = supplementRevenuePerProcedure;

            // Yearly Calculations
            let totalRevenueYear1 = (totalFemalePatientsYear1 + totalMalePatientsYear1) * averageRevenuePerProcedure;
            let totalRevenueYear2 = (totalFemalePatientsYear2 + totalMalePatientsYear2) * averageRevenuePerProcedure;
            let totalRevenueYear3 = (totalFemalePatientsYear3 + totalMalePatientsYear3) * averageRevenuePerProcedure;
            let totalRevenueCombined = totalRevenueYear1 + totalRevenueYear2 + totalRevenueYear3;
            document.getElementById("totalRevenueYear1").innerText = totalRevenueYear1;
            document.getElementById("totalRevenueYear2").innerText = totalRevenueYear2;
            document.getElementById("totalRevenueYear3").innerText = totalRevenueYear3;
            document.getElementById("totalRevenueCombined").innerText = totalRevenueCombined;

            let totalProfitYear1 = (totalFemalePatientsYear1 + totalMalePatientsYear1) * averageProfitPerProcedure;
            let totalProfitYear2 = (totalFemalePatientsYear2 + totalMalePatientsYear2) * averageProfitPerProcedure;
            let totalProfitYear3 = (totalFemalePatientsYear3 + totalMalePatientsYear3) * averageProfitPerProcedure;
            let totalProfitCombined = totalProfitYear1 + totalProfitYear2 + totalProfitYear3;
            document.getElementById("totalProfitYear1").innerText = totalProfitYear1;
            document.getElementById("totalProfitYear2").innerText = totalProfitYear2;
            document.getElementById("totalProfitYear3").innerText = totalProfitYear3;
            document.getElementById("totalProfitCombined").innerText = totalProfitCombined;

            let totalProfitWithNutraceuticalsYear1 = totalProfitYear1 + (supplementRevenuePerProcedure * (totalFemalePatientsYear1 + totalMalePatientsYear1));
            let totalProfitWithNutraceuticalsYear2 = totalProfitYear2 + (supplementRevenuePerProcedure * (totalFemalePatientsYear2 + totalMalePatientsYear2));
            let totalProfitWithNutraceuticalsYear3 = totalProfitYear3 + (supplementRevenuePerProcedure * (totalFemalePatientsYear3 + totalMalePatientsYear3));
            let totalProfitWithNutraceuticalsCombined = totalProfitWithNutraceuticalsYear1 + totalProfitWithNutraceuticalsYear2 + totalProfitWithNutraceuticalsYear3;
            document.getElementById("totalProfitWithNutraceuticalsYear1").innerText = totalProfitWithNutraceuticalsYear1;
            document.getElementById("totalProfitWithNutraceuticalsYear2").innerText = totalProfitWithNutraceuticalsYear2;
            document.getElementById("totalProfitWithNutraceuticalsYear3").innerText = totalProfitWithNutraceuticalsYear3;
            document.getElementById("totalProfitWithNutraceuticalsCombined").innerText = totalProfitWithNutraceuticalsCombined;

            // Dynamic Calculations -- New Patients

            let newpatient1 = newPatientsMonth1;
            let newpatient2 = newPatientsMonth2;
            let newpatient3 = newPatientsMonth3;
            let newpatient4 = newPatientsMonths4To12;
            let newpatient5 = newPatientsMonths4To12;
            let newpatient6 = newPatientsMonths4To12;
            let newpatient7 = newPatientsMonths4To12;
            let newpatient8 = newPatientsMonths4To12;
            let newpatient9 = newPatientsMonths4To12;
            let newpatient10 = newPatientsMonths4To12;
            let newpatient11 = newPatientsMonths4To12;
            let newpatient12 = newPatientsMonths4To12;
            let newpatient13 = newPatientsYear2;
            let newpatient14 = newPatientsYear2;
            let newpatient15 = newPatientsYear2;
            let newpatient16 = newPatientsYear2;
            let newpatient17 = newPatientsYear2;
            let newpatient18 = newPatientsYear2;
            let newpatient19 = newPatientsYear2;
            let newpatient20 = newPatientsYear2;
            let newpatient21 = newPatientsYear2;
            let newpatient22 = newPatientsYear2;
            let newpatient23 = newPatientsYear2;
            let newpatient24 = newPatientsYear2;
            let newpatient25 = newPatientsYear3;
            let newpatient26 = newPatientsYear3;
            let newpatient27 = newPatientsYear3;
            let newpatient28 = newPatientsYear3;
            let newpatient29 = newPatientsYear3;
            let newpatient30 = newPatientsYear3;
            let newpatient31 = newPatientsYear3;
            let newpatient32 = newPatientsYear3;
            let newpatient33 = newPatientsYear3;
            let newpatient34 = newPatientsYear3;
            let newpatient35 = newPatientsYear3;
            let newpatient36 = newPatientsYear3;


            // Dynamic Calculations -- New femalePatients

            let newfemalepatient1 = Math.round(newpatient1*femalePercentage);
            let newfemalepatient2 = Math.round(newpatient2*femalePercentage);
            let newfemalepatient3 = Math.round(newpatient3*femalePercentage);
            let newfemalepatient4 = Math.round(newpatient4*femalePercentage);
            let newfemalepatient5 = Math.round(newpatient5*femalePercentage);
            let newfemalepatient6 = Math.round(newpatient6*femalePercentage);
            let newfemalepatient7 = Math.round(newpatient7*femalePercentage);
            let newfemalepatient8 = Math.round(newpatient8*femalePercentage);
            let newfemalepatient9 = Math.round(newpatient9*femalePercentage);
            let newfemalepatient10 = Math.round(newpatient10*femalePercentage);
            let newfemalepatient11 = Math.round(newpatient11*femalePercentage);
            let newfemalepatient12 = Math.round(newpatient12*femalePercentage);
            let newfemalepatient13 = Math.round(newpatient13*femalePercentage);
            let newfemalepatient14 = Math.round(newpatient14*femalePercentage);
            let newfemalepatient15 = Math.round(newpatient15*femalePercentage);
            let newfemalepatient16 = Math.round(newpatient16*femalePercentage);
            let newfemalepatient17 = Math.round(newpatient17*femalePercentage);
            let newfemalepatient18 = Math.round(newpatient18*femalePercentage);
            let newfemalepatient19 = Math.round(newpatient19*femalePercentage);
            let newfemalepatient20 = Math.round(newpatient20*femalePercentage);
            let newfemalepatient21 = Math.round(newpatient21*femalePercentage);
            let newfemalepatient22 = Math.round(newpatient22*femalePercentage);
            let newfemalepatient23 = Math.round(newpatient23*femalePercentage);
            let newfemalepatient24 = Math.round(newpatient24*femalePercentage);
            let newfemalepatient25 = Math.round(newpatient25*femalePercentage);
            let newfemalepatient26 = Math.round(newpatient26*femalePercentage);
            let newfemalepatient27 = Math.round(newpatient27*femalePercentage);
            let newfemalepatient28 = Math.round(newpatient28*femalePercentage);
            let newfemalepatient29 = Math.round(newpatient29*femalePercentage);
            let newfemalepatient30 = Math.round(newpatient30*femalePercentage);
            let newfemalepatient31 = Math.round(newpatient31*femalePercentage);
            let newfemalepatient32 = Math.round(newpatient32*femalePercentage);
            let newfemalepatient33 = Math.round(newpatient33*femalePercentage);
            let newfemalepatient34 = Math.round(newpatient34*femalePercentage);
            let newfemalepatient35 = Math.round(newpatient35*femalePercentage);
            let newfemalepatient36 = Math.round(newpatient36*femalePercentage);


        // Dynamic Calculations -- New Returing Patients
           
        let returningfemalepatient1 = 0;
            let returningfemalepatient2 = 0;
            let returningfemalepatient3 = 0;
            let returningfemalepatient4 = Math.round(newfemalepatient1*0.95);
            let returningfemalepatient5 = Math.round(newfemalepatient2*0.95);
            let returningfemalepatient6 = Math.round(newfemalepatient3*0.95);
            let returningfemalepatient7 = Math.round(newfemalepatient1*0.9)+Math.round(newfemalepatient4*0.95);
            let returningfemalepatient8 = Math.round(newfemalepatient2*0.9)+Math.round(newfemalepatient5*0.95);
            let returningfemalepatient9 = Math.round(newfemalepatient3*0.9)+Math.round(newfemalepatient6*0.95);
            let returningfemalepatient10 = Math.round(newfemalepatient1*0.85)+Math.round(newfemalepatient4*0.9)+Math.round(newfemalepatient7*0.85);
            let returningfemalepatient11 = Math.round(newfemalepatient2*0.85)+Math.round(newfemalepatient5*0.9)+Math.round(newfemalepatient8*0.85);
            let returningfemalepatient12 = Math.round(newfemalepatient3*0.85)+Math.round(newfemalepatient6*0.9)+Math.round(newfemalepatient9*0.85);
            let returningfemalepatient13 = Math.round(newfemalepatient1*0.8)+Math.round(newfemalepatient4*0.85)+Math.round(newfemalepatient7*0.9)+Math.round(newfemalepatient10*0.95);
            let returningfemalepatient14 = Math.round(newfemalepatient2*0.8)+Math.round(newfemalepatient5*0.85)+Math.round(newfemalepatient8*0.9)+Math.round(newfemalepatient11*0.95);
            let returningfemalepatient15 = Math.round(newfemalepatient3*0.8)+Math.round(newfemalepatient6*0.85)+Math.round(newfemalepatient9*0.9)+Math.round(newfemalepatient12*0.95);
            let returningfemalepatient16 = Math.round(newfemalepatient1*0.75)+Math.round(newfemalepatient4*0.8)+Math.round(newfemalepatient7*0.85)+Math.round(newfemalepatient10*0.9)+Math.round(newfemalepatient13*0.95);
            let returningfemalepatient17 = Math.round(newfemalepatient2*0.75)+Math.round(newfemalepatient5*0.8)+Math.round(newfemalepatient8*0.85)+Math.round(newfemalepatient11*0.9)+Math.round(newfemalepatient14*0.95);
            let returningfemalepatient18 = Math.round(newfemalepatient3*0.75)+Math.round(newfemalepatient6*0.8)+Math.round(newfemalepatient9*0.85)+Math.round(newfemalepatient12*0.9)+Math.round(newfemalepatient15*0.95);
            let returningfemalepatient19 = Math.round(newfemalepatient1*0.7)+Math.round(newfemalepatient4*0.75)+Math.round(newfemalepatient7*0.8)+Math.round(newfemalepatient10*0.85)+Math.round(newfemalepatient13*0.9)+Math.round(newfemalepatient16*0.95);
            let returningfemalepatient20 = Math.round(newfemalepatient2*0.7)+Math.round(newfemalepatient5*0.75)+Math.round(newfemalepatient8*0.8)+Math.round(newfemalepatient11*0.85)+Math.round(newfemalepatient14*0.9)+Math.round(newfemalepatient17*0.95);
            let returningfemalepatient21 = Math.round(newfemalepatient3*0.7)+Math.round(newfemalepatient6*0.75)+Math.round(newfemalepatient9*0.8)+Math.round(newfemalepatient12*0.85)+Math.round(newfemalepatient15*0.9)+Math.round(newfemalepatient18*0.95);
            let returningfemalepatient22 = Math.round(newfemalepatient1*0.65)+Math.round(newfemalepatient4*0.7)+Math.round(newfemalepatient7*0.75)+Math.round(newfemalepatient10*0.8)+Math.round(newfemalepatient13*0.85)+Math.round(newfemalepatient16*0.9)+Math.round(newfemalepatient19*0.95);
            let returningfemalepatient23 = Math.round(newfemalepatient2*0.65)+Math.round(newfemalepatient5*0.7)+Math.round(newfemalepatient8*0.75)+Math.round(newfemalepatient11*0.8)+Math.round(newfemalepatient14*0.85)+Math.round(newfemalepatient17*0.9)+Math.round(newfemalepatient20*0.95);
            let returningfemalepatient24 = Math.round(newfemalepatient3*0.65)+Math.round(newfemalepatient6*0.7)+Math.round(newfemalepatient9*0.75)+Math.round(newfemalepatient12*0.8)+Math.round(newfemalepatient15*0.85)+Math.round(newfemalepatient18*0.9)+Math.round(newfemalepatient21*0.95);
            let returningfemalepatient25 = Math.round(newfemalepatient1*0.6)+Math.round(newfemalepatient4*0.65)+Math.round(newfemalepatient7*0.7)+Math.round(newfemalepatient10*0.75)+Math.round(newfemalepatient13*0.8)+Math.round(newfemalepatient16*0.85)+Math.round(newfemalepatient19*0.9)+Math.round(newfemalepatient22*0.95);
            let returningfemalepatient26 = Math.round(newfemalepatient2*0.6)+Math.round(newfemalepatient5*0.65)+Math.round(newfemalepatient8*0.7)+Math.round(newfemalepatient11*0.75)+Math.round(newfemalepatient14*0.8)+Math.round(newfemalepatient17*0.85)+Math.round(newfemalepatient20*0.9)+Math.round(newfemalepatient23*0.95);
            let returningfemalepatient27 = Math.round(newfemalepatient3*0.6)+Math.round(newfemalepatient6*0.65)+Math.round(newfemalepatient9*0.7)+Math.round(newfemalepatient12*0.75)+Math.round(newfemalepatient15*0.8)+Math.round(newfemalepatient18*0.85)+Math.round(newfemalepatient21*0.9)+Math.round(newfemalepatient24*0.95);
            let returningfemalepatient28 = Math.round(newfemalepatient1*0.55)+Math.round(newfemalepatient4*0.6)+Math.round(newfemalepatient7*0.65)+Math.round(newfemalepatient10*0.7)+Math.round(newfemalepatient13*0.75)+Math.round(newfemalepatient16*0.8)+Math.round(newfemalepatient19*0.85)+Math.round(newfemalepatient22*0.9)+Math.round(newfemalepatient25*0.95);
            let returningfemalepatient29 = Math.round(newfemalepatient2*0.55)+Math.round(newfemalepatient5*0.6)+Math.round(newfemalepatient8*0.65)+Math.round(newfemalepatient11*0.7)+Math.round(newfemalepatient14*0.75)+Math.round(newfemalepatient17*0.8)+Math.round(newfemalepatient20*0.85)+Math.round(newfemalepatient23*0.9)+Math.round(newfemalepatient26*0.95);
            let returningfemalepatient30 = Math.round(newfemalepatient3*0.55)+Math.round(newfemalepatient6*0.6)+Math.round(newfemalepatient9*0.65)+Math.round(newfemalepatient12*0.7)+Math.round(newfemalepatient15*0.75)+Math.round(newfemalepatient18*0.8)+Math.round(newfemalepatient21*0.85)+Math.round(newfemalepatient24*0.9)+Math.round(newfemalepatient27*0.95);
            let returningfemalepatient31 = Math.round(newfemalepatient1*0.5)+Math.round(newfemalepatient4*0.55)+Math.round(newfemalepatient7*0.6)+Math.round(newfemalepatient10*0.65)+Math.round(newfemalepatient13*0.7)+Math.round(newfemalepatient16*0.75)+Math.round(newfemalepatient19*0.8)+Math.round(newfemalepatient22*0.85)+Math.round(newfemalepatient25*0.9)+Math.round(newfemalepatient28*0.95);
            let returningfemalepatient32 = Math.round(newfemalepatient2*0.5)+Math.round(newfemalepatient5*0.55)+Math.round(newfemalepatient8*0.6)+Math.round(newfemalepatient11*0.65)+Math.round(newfemalepatient14*0.7)+Math.round(newfemalepatient17*0.75)+Math.round(newfemalepatient20*0.8)+Math.round(newfemalepatient23*0.85)+Math.round(newfemalepatient26*0.9)+Math.round(newfemalepatient29*0.95);
            let returningfemalepatient33 = Math.round(newfemalepatient3*0.5)+Math.round(newfemalepatient6*0.55)+Math.round(newfemalepatient9*0.6)+Math.round(newfemalepatient12*0.65)+Math.round(newfemalepatient15*0.7)+Math.round(newfemalepatient18*0.75)+Math.round(newfemalepatient21*0.8)+Math.round(newfemalepatient24*0.85)+Math.round(newfemalepatient27*0.9)+Math.round(newfemalepatient30*0.95);
            let returningfemalepatient34 = Math.round(newfemalepatient1*0.45)+Math.round(newfemalepatient4*0.5)+Math.round(newfemalepatient7*0.55)+Math.round(newfemalepatient10*0.6)+Math.round(newfemalepatient13*0.65)+Math.round(newfemalepatient16*0.7)+Math.round(newfemalepatient19*0.75)+Math.round(newfemalepatient22*0.8)+Math.round(newfemalepatient25*0.85)+Math.round(newfemalepatient28*0.9)+Math.round(newfemalepatient31*0.95);
            let returningfemalepatient35 = Math.round(newfemalepatient2*0.45)+Math.round(newfemalepatient5*0.5)+Math.round(newfemalepatient8*0.55)+Math.round(newfemalepatient11*0.6)+Math.round(newfemalepatient14*0.65)+Math.round(newfemalepatient17*0.7)+Math.round(newfemalepatient20*0.75)+Math.round(newfemalepatient23*0.8)+Math.round(newfemalepatient26*0.85)+Math.round(newfemalepatient29*0.9)+Math.round(newfemalepatient32*0.95);
            let returningfemalepatient36 = Math.round(newfemalepatient3*0.45)+Math.round(newfemalepatient6*0.5)+Math.round(newfemalepatient9*0.55)+Math.round(newfemalepatient12*0.6)+Math.round(newfemalepatient15*0.65)+Math.round(newfemalepatient18*0.7)+Math.round(newfemalepatient21*0.75)+Math.round(newfemalepatient24*0.8)+Math.round(newfemalepatient27*0.85)+Math.round(newfemalepatient30*0.9)+Math.round(newfemalepatient33*0.95);

            // Dynamic Total Female Patients
            
            let totalfemale1 = newfemalepatient1 + returningfemalepatient1;
            let totalfemale2 = newfemalepatient2 + returningfemalepatient2;
            let totalfemale3 = newfemalepatient3 + returningfemalepatient3;
            let totalfemale4 = newfemalepatient4 + returningfemalepatient4;
            let totalfemale5 = newfemalepatient5 + returningfemalepatient5;
            let totalfemale6 = newfemalepatient6 + returningfemalepatient6;
            let totalfemale7 = newfemalepatient7 + returningfemalepatient7;
            let totalfemale8 = newfemalepatient8 + returningfemalepatient8;
            let totalfemale9 = newfemalepatient9 + returningfemalepatient9;
            let totalfemale10 = newfemalepatient10 + returningfemalepatient10;
            let totalfemale11 = newfemalepatient11 + returningfemalepatient11;
            let totalfemale12 = newfemalepatient12 + returningfemalepatient12;
            let totalfemale13 = newfemalepatient13 + returningfemalepatient13;
            let totalfemale14 = newfemalepatient14 + returningfemalepatient14;
            let totalfemale15 = newfemalepatient15 + returningfemalepatient15;
            let totalfemale16 = newfemalepatient16 + returningfemalepatient16;
            let totalfemale17 = newfemalepatient17 + returningfemalepatient17;
            let totalfemale18 = newfemalepatient18 + returningfemalepatient18;
            let totalfemale19 = newfemalepatient19 + returningfemalepatient19;
            let totalfemale20 = newfemalepatient20 + returningfemalepatient20;
            let totalfemale21 = newfemalepatient21 + returningfemalepatient21;
            let totalfemale22 = newfemalepatient22 + returningfemalepatient22;
            let totalfemale23 = newfemalepatient23 + returningfemalepatient23;
            let totalfemale24 = newfemalepatient24 + returningfemalepatient24;
            let totalfemale25 = newfemalepatient25 + returningfemalepatient25;
            let totalfemale26 = newfemalepatient26 + returningfemalepatient26;
            let totalfemale27 = newfemalepatient27 + returningfemalepatient27;
            let totalfemale28 = newfemalepatient28 + returningfemalepatient28;
            let totalfemale29 = newfemalepatient29 + returningfemalepatient29;
            let totalfemale30 = newfemalepatient30 + returningfemalepatient30;
            let totalfemale31 = newfemalepatient31 + returningfemalepatient31;
            let totalfemale32 = newfemalepatient32 + returningfemalepatient32;
            let totalfemale33 = newfemalepatient33 + returningfemalepatient33;
            let totalfemale34 = newfemalepatient34 + returningfemalepatient34;
            let totalfemale35 = newfemalepatient35 + returningfemalepatient35;
            let totalfemale36 = newfemalepatient36 + returningfemalepatient36;



            let newmalepatient1 = Math.round(newpatient1*malePercentage);
            let newmalepatient2 = Math.round(newpatient2*malePercentage);
            let newmalepatient3 = Math.round(newpatient3*malePercentage);
            let newmalepatient4 = Math.round(newpatient4*malePercentage);
            let newmalepatient5 = Math.round(newpatient5*malePercentage);
            let newmalepatient6 = Math.round(newpatient6*malePercentage);
            let newmalepatient7 = Math.round(newpatient7*malePercentage);
            let newmalepatient8 = Math.round(newpatient8*malePercentage);
            let newmalepatient9 = Math.round(newpatient9*malePercentage);
            let newmalepatient10 = Math.round(newpatient10*malePercentage);
            let newmalepatient11 = Math.round(newpatient11*malePercentage);
            let newmalepatient12 = Math.round(newpatient12*malePercentage);
            let newmalepatient13 = Math.round(newpatient13*malePercentage);
            let newmalepatient14 = Math.round(newpatient14*malePercentage);
            let newmalepatient15 = Math.round(newpatient15*malePercentage);
            let newmalepatient16 = Math.round(newpatient16*malePercentage);
            let newmalepatient17 = Math.round(newpatient17*malePercentage);
            let newmalepatient18 = Math.round(newpatient18*malePercentage);
            let newmalepatient19 = Math.round(newpatient19*malePercentage);
            let newmalepatient20 = Math.round(newpatient20*malePercentage);
            let newmalepatient21 = Math.round(newpatient21*malePercentage);
            let newmalepatient22 = Math.round(newpatient22*malePercentage);
            let newmalepatient23 = Math.round(newpatient23*malePercentage);
            let newmalepatient24 = Math.round(newpatient24*malePercentage);
            let newmalepatient25 = Math.round(newpatient25*malePercentage);
            let newmalepatient26 = Math.round(newpatient26*malePercentage);
            let newmalepatient27 = Math.round(newpatient27*malePercentage);
            let newmalepatient28 = Math.round(newpatient28*malePercentage);
            let newmalepatient29 = Math.round(newpatient29*malePercentage);
            let newmalepatient30 = Math.round(newpatient30*malePercentage);
            let newmalepatient31 = Math.round(newpatient31*malePercentage);
            let newmalepatient32 = Math.round(newpatient32*malePercentage);
            let newmalepatient33 = Math.round(newpatient33*malePercentage);
            let newmalepatient34 = Math.round(newpatient34*malePercentage);
            let newmalepatient35 = Math.round(newpatient35*malePercentage);
            let newmalepatient36 = Math.round(newpatient36*malePercentage);

        // Returning Male

            let returningmalepatient1 = 0;
            let returningmalepatient2 = 0;
            let returningmalepatient3 = 0;
            let returningmalepatient4 = 0;
            let returningmalepatient5 = 0;
            let returningmalepatient6 = 0;
            let returningmalepatient7 =  Math.round(newmalepatient1 * 0.9);
            let returningmalepatient8 =  Math.round(newmalepatient2 * 0.9);
            let returningmalepatient9 =  Math.round(newmalepatient3 * 0.9);
            let returningmalepatient10 = Math.round(newmalepatient4 * 0.9);
            let returningmalepatient11 = Math.round(newmalepatient5 * 0.9);
            let returningmalepatient12 = Math.round(newmalepatient6 * 0.9);
            let returningmalepatient13 = Math.round(newmalepatient1* 0.8)+Math.round(newmalepatient7*0.9);
            let returningmalepatient14 = Math.round(newmalepatient2* 0.8)+Math.round(newmalepatient8*0.9);
            let returningmalepatient15 = Math.round(newmalepatient3* 0.8)+Math.round(newmalepatient9*0.9);
            let returningmalepatient16 = Math.round(newmalepatient4* 0.8)+Math.round(newmalepatient10*0.9);
            let returningmalepatient17 = Math.round(newmalepatient5* 0.8)+Math.round(newmalepatient11*0.9);
            let returningmalepatient18 = Math.round(newmalepatient6* 0.8)+Math.round(newmalepatient12*0.9);
            let returningmalepatient19 = Math.round(newmalepatient1* 0.7)+Math.round(newmalepatient7*0.8)+Math.round(newmalepatient13*0.9);
            let returningmalepatient20 = Math.round(newmalepatient2* 0.7)+Math.round(newmalepatient8*0.8)+Math.round(newmalepatient14*0.9);
            let returningmalepatient21 = Math.round(newmalepatient3* 0.7)+Math.round(newmalepatient9*0.8)+Math.round(newmalepatient15*0.9);
            let returningmalepatient22 = Math.round(newmalepatient4* 0.7)+Math.round(newmalepatient10*0.8)+Math.round(newmalepatient16*0.9);
            let returningmalepatient23 = Math.round(newmalepatient5* 0.7)+Math.round(newmalepatient11*0.8)+Math.round(newmalepatient17*0.9);
            let returningmalepatient24 = Math.round(newmalepatient6* 0.7)+Math.round(newmalepatient12*0.8)+Math.round(newmalepatient18*0.9);
            let returningmalepatient25 = Math.round(newmalepatient1* 0.6)+Math.round(newmalepatient7*0.7)+Math.round(newmalepatient13*0.8)+Math.round(newmalepatient19*0.9);
            let returningmalepatient26 = Math.round(newmalepatient2* 0.6)+Math.round(newmalepatient8*0.7)+Math.round(newmalepatient14*0.8)+Math.round(newmalepatient20*0.9);
            let returningmalepatient27 = Math.round(newmalepatient3* 0.6)+Math.round(newmalepatient9*0.7)+Math.round(newmalepatient15*0.8)+Math.round(newmalepatient21*0.9);
            let returningmalepatient28 = Math.round(newmalepatient4* 0.6)+Math.round(newmalepatient10*0.7)+Math.round(newmalepatient16*0.8)+Math.round(newmalepatient22*0.9);
            let returningmalepatient29 = Math.round(newmalepatient5* 0.6)+Math.round(newmalepatient11*0.7)+Math.round(newmalepatient17*0.8)+Math.round(newmalepatient23*0.9);
            let returningmalepatient30 = Math.round(newmalepatient6* 0.6)+Math.round(newmalepatient12*0.7)+Math.round(newmalepatient18*0.8)+Math.round(newmalepatient24*0.9);
            let returningmalepatient31 = Math.round(newmalepatient1* 0.5)+Math.round(newmalepatient7*0.6)+Math.round(newmalepatient13*0.7)+Math.round(newmalepatient19*0.8)+Math.round(newmalepatient25*0.9);
            let returningmalepatient32 = Math.round(newmalepatient2* 0.5)+Math.round(newmalepatient8*0.6)+Math.round(newmalepatient14*0.7)+Math.round(newmalepatient20*0.8)+Math.round(newmalepatient26*0.9);
            let returningmalepatient33 = Math.round(newmalepatient3* 0.5)+Math.round(newmalepatient9*0.6)+Math.round(newmalepatient15*0.7)+Math.round(newmalepatient21*0.8)+Math.round(newmalepatient27*0.9);
            let returningmalepatient34 = Math.round(newmalepatient4* 0.5)+Math.round(newmalepatient10*0.6)+Math.round(newmalepatient16*0.7)+Math.round(newmalepatient22*0.8)+Math.round(newmalepatient28*0.9);
            let returningmalepatient35 = Math.round(newmalepatient5* 0.5)+Math.round(newmalepatient11*0.6)+Math.round(newmalepatient17*0.7)+Math.round(newmalepatient23*0.8)+Math.round(newmalepatient29*0.9);
            let returningmalepatient36 = Math.round(newmalepatient6* 0.5)+Math.round(newmalepatient12*0.6)+Math.round(newmalepatient18*0.7)+Math.round(newmalepatient24*0.8)+Math.round(newmalepatient30*0.9);

            //total male


            let totalmale1 = newmalepatient1 + returningmalepatient1;
            let totalmale2 = newmalepatient2 + returningmalepatient2;
            let totalmale3 = newmalepatient3 + returningmalepatient3;
            let totalmale4 = newmalepatient4 + returningmalepatient4;
            let totalmale5 = newmalepatient5 + returningmalepatient5;
            let totalmale6 = newmalepatient6 + returningmalepatient6;
            let totalmale7 = newmalepatient7 + returningmalepatient7;
            let totalmale8 = newmalepatient8 + returningmalepatient8;
            let totalmale9 = newmalepatient9 + returningmalepatient9;
            let totalmale10 = newmalepatient10 + returningmalepatient10;
            let totalmale11 = newmalepatient11 + returningmalepatient11;
            let totalmale12 = newmalepatient12 + returningmalepatient12;
            let totalmale13 = newmalepatient13 + returningmalepatient13;
            let totalmale14 = newmalepatient14 + returningmalepatient14;
            let totalmale15 = newmalepatient15 + returningmalepatient15;
            let totalmale16 = newmalepatient16 + returningmalepatient16;
            let totalmale17 = newmalepatient17 + returningmalepatient17;
            let totalmale18 = newmalepatient18 + returningmalepatient18;
            let totalmale19 = newmalepatient19 + returningmalepatient19;
            let totalmale20 = newmalepatient20 + returningmalepatient20;
            let totalmale21 = newmalepatient21 + returningmalepatient21;
            let totalmale22 = newmalepatient22 + returningmalepatient22;
            let totalmale23 = newmalepatient23 + returningmalepatient23;
            let totalmale24 = newmalepatient24 + returningmalepatient24;
            let totalmale25 = newmalepatient25 + returningmalepatient25;
            let totalmale26 = newmalepatient26 + returningmalepatient26;
            let totalmale27 = newmalepatient27 + returningmalepatient27;
            let totalmale28 = newmalepatient28 + returningmalepatient28;
            let totalmale29 = newmalepatient29 + returningmalepatient29;
            let totalmale30 = newmalepatient30 + returningmalepatient30;
            let totalmale31 = newmalepatient31 + returningmalepatient31;
            let totalmale32 = newmalepatient32 + returningmalepatient32;
            let totalmale33 = newmalepatient33 + returningmalepatient33;
            let totalmale34 = newmalepatient34 + returningmalepatient34;
            let totalmale35 = newmalepatient35 + returningmalepatient35;
            let totalmale36 = newmalepatient36 + returningmalepatient36;

            // totalprocedure

            let TotalProcedure1 = totalmale1 + totalfemale1;
            let TotalProcedure2 = totalmale2 + totalfemale2;
            let TotalProcedure3 = totalmale3 + totalfemale3;
            let TotalProcedure4 = totalmale4 + totalfemale4;
            let TotalProcedure5 = totalmale5 + totalfemale5;
            let TotalProcedure6 = totalmale6 + totalfemale6;
            let TotalProcedure7 = totalmale7 + totalfemale7;
            let TotalProcedure8 = totalmale8 + totalfemale8;
            let TotalProcedure9 = totalmale9 + totalfemale9;
            let TotalProcedure10 = totalmale10 + totalfemale10;
            let TotalProcedure11 = totalmale11 + totalfemale11;
            let TotalProcedure12 = totalmale12 + totalfemale12;
            let TotalProcedure13 = totalmale13 + totalfemale13;
            let TotalProcedure14 = totalmale14 + totalfemale14;
            let TotalProcedure15 = totalmale15 + totalfemale15;
            let TotalProcedure16 = totalmale16 + totalfemale16;
            let TotalProcedure17 = totalmale17 + totalfemale17;
            let TotalProcedure18 = totalmale18 + totalfemale18;
            let TotalProcedure19 = totalmale19 + totalfemale19;
            let TotalProcedure20 = totalmale20 + totalfemale20;
            let TotalProcedure21 = totalmale21 + totalfemale21;
            let TotalProcedure22 = totalmale22 + totalfemale22;
            let TotalProcedure23 = totalmale23 + totalfemale23;
            let TotalProcedure24 = totalmale24 + totalfemale24;
            let TotalProcedure25 = totalmale25 + totalfemale25;
            let TotalProcedure26 = totalmale26 + totalfemale26;
            let TotalProcedure27 = totalmale27 + totalfemale27;
            let TotalProcedure28 = totalmale28 + totalfemale28;
            let TotalProcedure29 = totalmale29 + totalfemale29;
            let TotalProcedure30 = totalmale30 + totalfemale30;
            let TotalProcedure31 = totalmale31 + totalfemale31;
            let TotalProcedure32 = totalmale32 + totalfemale32;
            let TotalProcedure33 = totalmale33 + totalfemale33;
            let TotalProcedure34 = totalmale34 + totalfemale34;
            let TotalProcedure35 = totalmale35 + totalfemale35;
            let TotalProcedure36 = totalmale36 + totalfemale36;

            
        


            //Procedure Revenue

            let TotalProcedureRevenue1 = totalmale1 * maleProcedureIncome + totalfemale1 * femaleProcedureIncome;
            let TotalProcedureRevenue2 = totalmale2 * maleProcedureIncome + totalfemale2 * femaleProcedureIncome;
            let TotalProcedureRevenue3 = totalmale3 * maleProcedureIncome + totalfemale3 * femaleProcedureIncome;
            let TotalProcedureRevenue4 = totalmale4 * maleProcedureIncome + totalfemale4 * femaleProcedureIncome;
            let TotalProcedureRevenue5 = totalmale5 * maleProcedureIncome + totalfemale5 * femaleProcedureIncome;
            let TotalProcedureRevenue6 = totalmale6 * maleProcedureIncome + totalfemale6 * femaleProcedureIncome;
            let TotalProcedureRevenue7 = totalmale7 * maleProcedureIncome + totalfemale7 * femaleProcedureIncome;
            let TotalProcedureRevenue8 = totalmale8 * maleProcedureIncome + totalfemale8 * femaleProcedureIncome;
            let TotalProcedureRevenue9 = totalmale9 * maleProcedureIncome + totalfemale9 * femaleProcedureIncome;
            let TotalProcedureRevenue10 = totalmale10 * maleProcedureIncome + totalfemale10 * femaleProcedureIncome;
            let TotalProcedureRevenue11 = totalmale11 * maleProcedureIncome + totalfemale11 * femaleProcedureIncome;
            let TotalProcedureRevenue12 = totalmale12 * maleProcedureIncome + totalfemale12 * femaleProcedureIncome;
            let TotalProcedureRevenue13 = totalmale13 * maleProcedureIncome + totalfemale13 * femaleProcedureIncome;
            let TotalProcedureRevenue14 = totalmale14 * maleProcedureIncome + totalfemale14 * femaleProcedureIncome;
            let TotalProcedureRevenue15 = totalmale15 * maleProcedureIncome + totalfemale15 * femaleProcedureIncome;
            let TotalProcedureRevenue16 = totalmale16 * maleProcedureIncome + totalfemale16 * femaleProcedureIncome;
            let TotalProcedureRevenue17 = totalmale17 * maleProcedureIncome + totalfemale17 * femaleProcedureIncome;
            let TotalProcedureRevenue18 = totalmale18 * maleProcedureIncome + totalfemale18 * femaleProcedureIncome;
            let TotalProcedureRevenue19 = totalmale19 * maleProcedureIncome + totalfemale19 * femaleProcedureIncome;
            let TotalProcedureRevenue20 = totalmale20 * maleProcedureIncome + totalfemale20 * femaleProcedureIncome;
            let TotalProcedureRevenue21 = totalmale21 * maleProcedureIncome + totalfemale21 * femaleProcedureIncome;
            let TotalProcedureRevenue22 = totalmale22 * maleProcedureIncome + totalfemale22 * femaleProcedureIncome;
            let TotalProcedureRevenue23 = totalmale23 * maleProcedureIncome + totalfemale23 * femaleProcedureIncome;
            let TotalProcedureRevenue24 = totalmale24 * maleProcedureIncome + totalfemale24 * femaleProcedureIncome;
            let TotalProcedureRevenue25 = totalmale25 * maleProcedureIncome + totalfemale25 * femaleProcedureIncome;
            let TotalProcedureRevenue26 = totalmale26 * maleProcedureIncome + totalfemale26 * femaleProcedureIncome;
            let TotalProcedureRevenue27 = totalmale27 * maleProcedureIncome + totalfemale27 * femaleProcedureIncome;
            let TotalProcedureRevenue28 = totalmale28 * maleProcedureIncome + totalfemale28 * femaleProcedureIncome;
            let TotalProcedureRevenue29 = totalmale29 * maleProcedureIncome + totalfemale29 * femaleProcedureIncome;
            let TotalProcedureRevenue30 = totalmale30 * maleProcedureIncome + totalfemale30 * femaleProcedureIncome;
            let TotalProcedureRevenue31 = totalmale31 * maleProcedureIncome + totalfemale31 * femaleProcedureIncome;
            let TotalProcedureRevenue32 = totalmale32 * maleProcedureIncome + totalfemale32 * femaleProcedureIncome;
            let TotalProcedureRevenue33 = totalmale33 * maleProcedureIncome + totalfemale33 * femaleProcedureIncome;
            let TotalProcedureRevenue34 = totalmale34 * maleProcedureIncome + totalfemale34 * femaleProcedureIncome;
            let TotalProcedureRevenue35 = totalmale35 * maleProcedureIncome + totalfemale35 * femaleProcedureIncome;
            let TotalProcedureRevenue36 = totalmale36 * maleProcedureIncome + totalfemale36 * femaleProcedureIncome;

            //Procedure Cost


            let TotalProcedureCost1 = totalmale1 * maleProcedureCost + totalfemale1 * femaleProcedureCost;
            let TotalProcedureCost2 = totalmale2 * maleProcedureCost + totalfemale2 * femaleProcedureCost;
            let TotalProcedureCost3 = totalmale3 * maleProcedureCost + totalfemale3 * femaleProcedureCost;
            let TotalProcedureCost4 = totalmale4 * maleProcedureCost + totalfemale4 * femaleProcedureCost;
            let TotalProcedureCost5 = totalmale5 * maleProcedureCost + totalfemale5 * femaleProcedureCost;
            let TotalProcedureCost6 = totalmale6 * maleProcedureCost + totalfemale6 * femaleProcedureCost;
            let TotalProcedureCost7 = totalmale7 * maleProcedureCost + totalfemale7 * femaleProcedureCost;
            let TotalProcedureCost8 = totalmale8 * maleProcedureCost + totalfemale8 * femaleProcedureCost;
            let TotalProcedureCost9 = totalmale9 * maleProcedureCost + totalfemale9 * femaleProcedureCost;
            let TotalProcedureCost10 = totalmale10 * maleProcedureCost + totalfemale10 * femaleProcedureCost;
            let TotalProcedureCost11 = totalmale11 * maleProcedureCost + totalfemale11 * femaleProcedureCost;
            let TotalProcedureCost12 = totalmale12 * maleProcedureCost + totalfemale12 * femaleProcedureCost;
            let TotalProcedureCost13 = totalmale13 * maleProcedureCost + totalfemale13 * femaleProcedureCost;
            let TotalProcedureCost14 = totalmale14 * maleProcedureCost + totalfemale14 * femaleProcedureCost;
            let TotalProcedureCost15 = totalmale15 * maleProcedureCost + totalfemale15 * femaleProcedureCost;
            let TotalProcedureCost16 = totalmale16 * maleProcedureCost + totalfemale16 * femaleProcedureCost;
            let TotalProcedureCost17 = totalmale17 * maleProcedureCost + totalfemale17 * femaleProcedureCost;
            let TotalProcedureCost18 = totalmale18 * maleProcedureCost + totalfemale18 * femaleProcedureCost;
            let TotalProcedureCost19 = totalmale19 * maleProcedureCost + totalfemale19 * femaleProcedureCost;
            let TotalProcedureCost20 = totalmale20 * maleProcedureCost + totalfemale20 * femaleProcedureCost;
            let TotalProcedureCost21 = totalmale21 * maleProcedureCost + totalfemale21 * femaleProcedureCost;
            let TotalProcedureCost22 = totalmale22 * maleProcedureCost + totalfemale22 * femaleProcedureCost;
            let TotalProcedureCost23 = totalmale23 * maleProcedureCost + totalfemale23 * femaleProcedureCost;
            let TotalProcedureCost24 = totalmale24 * maleProcedureCost + totalfemale24 * femaleProcedureCost;
            let TotalProcedureCost25 = totalmale25 * maleProcedureCost + totalfemale25 * femaleProcedureCost;
            let TotalProcedureCost26 = totalmale26 * maleProcedureCost + totalfemale26 * femaleProcedureCost;
            let TotalProcedureCost27 = totalmale27 * maleProcedureCost + totalfemale27 * femaleProcedureCost;
            let TotalProcedureCost28 = totalmale28 * maleProcedureCost + totalfemale28 * femaleProcedureCost;
            let TotalProcedureCost29 = totalmale29 * maleProcedureCost + totalfemale29 * femaleProcedureCost;
            let TotalProcedureCost30 = totalmale30 * maleProcedureCost + totalfemale30 * femaleProcedureCost;
            let TotalProcedureCost31 = totalmale31 * maleProcedureCost + totalfemale31 * femaleProcedureCost;
            let TotalProcedureCost32 = totalmale32 * maleProcedureCost + totalfemale32 * femaleProcedureCost;
            let TotalProcedureCost33 = totalmale33 * maleProcedureCost + totalfemale33 * femaleProcedureCost;
            let TotalProcedureCost34 = totalmale34 * maleProcedureCost + totalfemale34 * femaleProcedureCost;
            let TotalProcedureCost35 = totalmale35 * maleProcedureCost + totalfemale35 * femaleProcedureCost;
            let TotalProcedureCost36 = totalmale36 * maleProcedureCost + totalfemale36 * femaleProcedureCost;


            // Procedure Profit

            let TotalProcedureProfit1 = TotalProcedureRevenue1 - TotalProcedureCost1;
            let TotalProcedureProfit2 = TotalProcedureRevenue2 - TotalProcedureCost2;
            let TotalProcedureProfit3 = TotalProcedureRevenue3 - TotalProcedureCost3;
            let TotalProcedureProfit4 = TotalProcedureRevenue4 - TotalProcedureCost4;
            let TotalProcedureProfit5 = TotalProcedureRevenue5 - TotalProcedureCost5;
            let TotalProcedureProfit6 = TotalProcedureRevenue6 - TotalProcedureCost6;
            let TotalProcedureProfit7 = TotalProcedureRevenue7 - TotalProcedureCost7;
            let TotalProcedureProfit8 = TotalProcedureRevenue8 - TotalProcedureCost8;
            let TotalProcedureProfit9 = TotalProcedureRevenue9 - TotalProcedureCost9;
            let TotalProcedureProfit10 = TotalProcedureRevenue10 - TotalProcedureCost10;
            let TotalProcedureProfit11 = TotalProcedureRevenue11 - TotalProcedureCost11;
            let TotalProcedureProfit12 = TotalProcedureRevenue12 - TotalProcedureCost12;
            let TotalProcedureProfit13 = TotalProcedureRevenue13 - TotalProcedureCost13;
            let TotalProcedureProfit14 = TotalProcedureRevenue14 - TotalProcedureCost14;
            let TotalProcedureProfit15 = TotalProcedureRevenue15 - TotalProcedureCost15;
            let TotalProcedureProfit16 = TotalProcedureRevenue16 - TotalProcedureCost16;
            let TotalProcedureProfit17 = TotalProcedureRevenue17 - TotalProcedureCost17;
            let TotalProcedureProfit18 = TotalProcedureRevenue18 - TotalProcedureCost18;
            let TotalProcedureProfit19 = TotalProcedureRevenue19 - TotalProcedureCost19;
            let TotalProcedureProfit20 = TotalProcedureRevenue20 - TotalProcedureCost20;
            let TotalProcedureProfit21 = TotalProcedureRevenue21 - TotalProcedureCost21;
            let TotalProcedureProfit22 = TotalProcedureRevenue22 - TotalProcedureCost22;
            let TotalProcedureProfit23 = TotalProcedureRevenue23 - TotalProcedureCost23;
            let TotalProcedureProfit24 = TotalProcedureRevenue24 - TotalProcedureCost24;
            let TotalProcedureProfit25 = TotalProcedureRevenue25 - TotalProcedureCost25;
            let TotalProcedureProfit26 = TotalProcedureRevenue26 - TotalProcedureCost26;
            let TotalProcedureProfit27 = TotalProcedureRevenue27 - TotalProcedureCost27;
            let TotalProcedureProfit28 = TotalProcedureRevenue28 - TotalProcedureCost28;
            let TotalProcedureProfit29 = TotalProcedureRevenue29 - TotalProcedureCost29;
            let TotalProcedureProfit30 = TotalProcedureRevenue30 - TotalProcedureCost30;
            let TotalProcedureProfit31 = TotalProcedureRevenue31 - TotalProcedureCost31;
            let TotalProcedureProfit32 = TotalProcedureRevenue32 - TotalProcedureCost32;
            let TotalProcedureProfit33 = TotalProcedureRevenue33 - TotalProcedureCost33;
            let TotalProcedureProfit34 = TotalProcedureRevenue34 - TotalProcedureCost34;
            let TotalProcedureProfit35 = TotalProcedureRevenue35 - TotalProcedureCost35;
            let TotalProcedureProfit36 = TotalProcedureRevenue36 - TotalProcedureCost36;


            //Supplement Units

            let Supplementunit1 =  Math.round(newpatient1*0.5);
            let Supplementunit2 =  Math.round(newpatient2*0.5);
            let Supplementunit3 =  Math.round(newpatient3*0.5);
            let Supplementunit4 =  Math.round(newpatient4*0.5) + Supplementunit1;
            let Supplementunit5 =  Math.round(newpatient5*0.5) + Supplementunit2;
            let Supplementunit6 =  Math.round(newpatient6*0.5) + Supplementunit3;
            let Supplementunit7 =  Math.round(newpatient7*0.5) + Supplementunit4;
            let Supplementunit8 =  Math.round(newpatient8*0.5) + Supplementunit5;
            let Supplementunit9 =  Math.round(newpatient9*0.5) + Supplementunit6;
            let Supplementunit10 = Math.round(newpatient10*0.5) + Supplementunit7;
            let Supplementunit11 = Math.round(newpatient11*0.5) + Supplementunit8;
            let Supplementunit12 = Math.round(newpatient12*0.5) + Supplementunit9;
            let Supplementunit13 = Math.round(newpatient13*0.5) + Supplementunit10;
            let Supplementunit14 = Math.round(newpatient14*0.5) + Supplementunit11;
            let Supplementunit15 = Math.round(newpatient15*0.5) + Supplementunit12;
            let Supplementunit16 = Math.round(newpatient16*0.5) + Supplementunit13;
            let Supplementunit17 = Math.round(newpatient17*0.5) + Supplementunit14;
            let Supplementunit18 = Math.round(newpatient18*0.5) + Supplementunit15;
            let Supplementunit19 = Math.round(newpatient19*0.5) + Supplementunit16;
            let Supplementunit20 = Math.round(newpatient20*0.5) + Supplementunit17;
            let Supplementunit21 = Math.round(newpatient21*0.5) + Supplementunit18;
            let Supplementunit22 = Math.round(newpatient22*0.5) + Supplementunit19;
            let Supplementunit23 = Math.round(newpatient23*0.5) + Supplementunit20;
            let Supplementunit24 = Math.round(newpatient24*0.5) + Supplementunit21;
            let Supplementunit25 = Math.round(newpatient25*0.5) + Supplementunit22;
            let Supplementunit26 = Math.round(newpatient26*0.5) + Supplementunit23;
            let Supplementunit27 = Math.round(newpatient27*0.5) + Supplementunit24;
            let Supplementunit28 = Math.round(newpatient28*0.5) + Supplementunit25;
            let Supplementunit29 = Math.round(newpatient29*0.5) + Supplementunit26;
            let Supplementunit30 = Math.round(newpatient30*0.5) + Supplementunit27;
            let Supplementunit31 = Math.round(newpatient31*0.5) + Supplementunit28;
            let Supplementunit32 = Math.round(newpatient32*0.5) + Supplementunit29;
            let Supplementunit33 = Math.round(newpatient33*0.5) + Supplementunit30;
            let Supplementunit34 = Math.round(newpatient34*0.5) + Supplementunit31;
            let Supplementunit35 = Math.round(newpatient35*0.5) + Supplementunit32;
            let Supplementunit36 = Math.round(newpatient36*0.5) + Supplementunit33;


            //suplement Income

            let SupplementIncome1 = Supplementunit1 * 33;
            let SupplementIncome2 = Supplementunit2 * 33;
            let SupplementIncome3 = Supplementunit3 * 33;
            let SupplementIncome4 = Supplementunit4 * 33;
            let SupplementIncome5 = Supplementunit5 * 33;
            let SupplementIncome6 = Supplementunit6 * 33;
            let SupplementIncome7 = Supplementunit7 * 33;
            let SupplementIncome8 = Supplementunit8 * 33;
            let SupplementIncome9 = Supplementunit9 * 33;
            let SupplementIncome10 = Supplementunit10 * 33;
            let SupplementIncome11= Supplementunit11 * 33;
            let SupplementIncome12 = Supplementunit12 * 33;
            let SupplementIncome13 = Supplementunit13 * 33;
            let SupplementIncome14 = Supplementunit14 * 33;
            let SupplementIncome15 = Supplementunit15 * 33;
            let SupplementIncome16 = Supplementunit16 * 33;
            let SupplementIncome17 = Supplementunit17 * 33;
            let SupplementIncome18 = Supplementunit18 * 33;
            let SupplementIncome19 = Supplementunit19 * 33;
            let SupplementIncome20 = Supplementunit20 * 33;
            let SupplementIncome21 = Supplementunit21 * 33;
            let SupplementIncome22 = Supplementunit22 * 33;
            let SupplementIncome23 = Supplementunit23 * 33;
            let SupplementIncome24 = Supplementunit24 * 33;
            let SupplementIncome25 = Supplementunit25 * 33;
            let SupplementIncome26 = Supplementunit26 * 33;
            let SupplementIncome27 = Supplementunit27 * 33;
            let SupplementIncome28 = Supplementunit28 * 33;
            let SupplementIncome29 = Supplementunit29 * 33;
            let SupplementIncome30 = Supplementunit30 * 33;
            let SupplementIncome31 = Supplementunit31 * 33;
            let SupplementIncome32 = Supplementunit32 * 33;
            let SupplementIncome33 = Supplementunit33 * 33;
            let SupplementIncome34 = Supplementunit34 * 33;
            let SupplementIncome35 = Supplementunit35 * 33;
            let SupplementIncome36 = Supplementunit36 * 33;



            //Consult Fees

            let ConsultFees1 = newpatient1 * consultFees;
            let ConsultFees2 = newpatient2 * consultFees;
            let ConsultFees3 = newpatient3 * consultFees;
            let ConsultFees4 = newpatient4 * consultFees;
            let ConsultFees5 = newpatient5 * consultFees;
            let ConsultFees6 = newpatient6 * consultFees;
            let ConsultFees7 = newpatient7 * consultFees;
            let ConsultFees8 = newpatient8 * consultFees;
            let ConsultFees9 = newpatient9 * consultFees;
            let ConsultFees10 = newpatient10 * consultFees;
            let ConsultFees11= newpatient11 * consultFees;
            let ConsultFees12 = newpatient12 * consultFees;
            let ConsultFees13 = newpatient13 * consultFees;
            let ConsultFees14 = newpatient14 * consultFees;
            let ConsultFees15 = newpatient15 * consultFees;
            let ConsultFees16 = newpatient16 * consultFees;
            let ConsultFees17 = newpatient17 * consultFees;
            let ConsultFees18 = newpatient18 * consultFees;
            let ConsultFees19 = newpatient19 * consultFees;
            let ConsultFees20 = newpatient20 * consultFees;
            let ConsultFees21 = newpatient21 * consultFees;
            let ConsultFees22 = newpatient22 * consultFees;
            let ConsultFees23 = newpatient23 * consultFees;
            let ConsultFees24 = newpatient24 * consultFees;
            let ConsultFees25 = newpatient25 * consultFees;
            let ConsultFees26 = newpatient26 * consultFees;
            let ConsultFees27 = newpatient27 * consultFees;
            let ConsultFees28 = newpatient28 * consultFees;
            let ConsultFees29 = newpatient29 * consultFees;
            let ConsultFees30 = newpatient30 * consultFees;
            let ConsultFees31 = newpatient31 * consultFees;
            let ConsultFees32 = newpatient32 * consultFees;
            let ConsultFees33 = newpatient33 * consultFees;
            let ConsultFees34 = newpatient34 * consultFees;
            let ConsultFees35 = newpatient35 * consultFees;
            let ConsultFees36 = newpatient36 * consultFees;


            //lab fees

            let labFees1 = newpatient1 * labFees;
            let labFees2 = newpatient2 * labFees;
            let labFees3 = newpatient3 * labFees;
            let labFees4 = newpatient4 * labFees;
            let labFees5 = newpatient5 * labFees;
            let labFees6 = newpatient6 * labFees;
            let labFees7 = newpatient7 * labFees;
            let labFees8 = newpatient8 * labFees;
            let labFees9 = newpatient9 * labFees;
            let labFees10 = newpatient10 * labFees;
            let labFees11= newpatient11 * labFees;
            let labFees12 = newpatient12 * labFees;
            let labFees13 = newpatient13 * labFees;
            let labFees14 = newpatient14 * labFees;
            let labFees15 = newpatient15 * labFees;
            let labFees16 = newpatient16 * labFees;
            let labFees17 = newpatient17 * labFees;
            let labFees18 = newpatient18 * labFees;
            let labFees19 = newpatient19 * labFees;
            let labFees20 = newpatient20 * labFees;
            let labFees21 = newpatient21 * labFees;
            let labFees22 = newpatient22 * labFees;
            let labFees23 = newpatient23 * labFees;
            let labFees24 = newpatient24 * labFees;
            let labFees25 = newpatient25 * labFees;
            let labFees26 = newpatient26 * labFees;
            let labFees27 = newpatient27 * labFees;
            let labFees28 = newpatient28 * labFees;
            let labFees29 = newpatient29 * labFees;
            let labFees30 = newpatient30 * labFees;
            let labFees31 = newpatient31 * labFees;
            let labFees32 = newpatient32 * labFees;
            let labFees33 = newpatient33 * labFees;
            let labFees34 = newpatient34 * labFees;
            let labFees35 = newpatient35 * labFees;
            let labFees36 = newpatient36 * labFees;


            //


            //trocar kit

            let trocarCost1 = TotalProcedure1 * trocarCost;
            let trocarCost2 = TotalProcedure2 * trocarCost;
            let trocarCost3 = TotalProcedure3 * trocarCost;
            let trocarCost4 = TotalProcedure4 * trocarCost;
            let trocarCost5 = TotalProcedure5 * trocarCost;
            let trocarCost6 = TotalProcedure6 * trocarCost;
            let trocarCost7 = TotalProcedure7 * trocarCost;
            let trocarCost8 = TotalProcedure8 * trocarCost;
            let trocarCost9 = TotalProcedure9 * trocarCost;
            let trocarCost10 = TotalProcedure10 * trocarCost;
            let trocarCost11= TotalProcedure11 * trocarCost;
            let trocarCost12 = TotalProcedure12 * trocarCost;
            let trocarCost13 = TotalProcedure13 * trocarCost;
            let trocarCost14 = TotalProcedure14 * trocarCost;
            let trocarCost15 = TotalProcedure15 * trocarCost;
            let trocarCost16 = TotalProcedure16 * trocarCost;
            let trocarCost17 = TotalProcedure17 * trocarCost;
            let trocarCost18 = TotalProcedure18 * trocarCost;
            let trocarCost19 = TotalProcedure19 * trocarCost;
            let trocarCost20 = TotalProcedure20 * trocarCost;
            let trocarCost21 = TotalProcedure21 * trocarCost;
            let trocarCost22 = TotalProcedure22 * trocarCost;
            let trocarCost23 = TotalProcedure23 * trocarCost;
            let trocarCost24 = TotalProcedure24 * trocarCost;
            let trocarCost25 = TotalProcedure25 * trocarCost;
            let trocarCost26 = TotalProcedure26 * trocarCost;
            let trocarCost27 = TotalProcedure27 * trocarCost;
            let trocarCost28 = TotalProcedure28 * trocarCost;
            let trocarCost29 = TotalProcedure29 * trocarCost;
            let trocarCost30 = TotalProcedure30 * trocarCost;
            let trocarCost31 = TotalProcedure31 * trocarCost;
            let trocarCost32 = TotalProcedure32 * trocarCost;
            let trocarCost33 = TotalProcedure33 * trocarCost;
            let trocarCost34 = TotalProcedure34 * trocarCost;
            let trocarCost35 = TotalProcedure35 * trocarCost;
            let trocarCost36 = TotalProcedure36 * trocarCost;


            // total gross profit

            let grossProfit1 = TotalProcedureProfit1 + SupplementIncome1 + ConsultFees1 + labFees1 - startupFees - trocarCost1;
            let grossProfit2 = TotalProcedureProfit2 + SupplementIncome2 + ConsultFees2 + labFees2 - trocarCost2;
            let grossProfit3 = TotalProcedureProfit3 + SupplementIncome3 + ConsultFees3 + labFees3 - trocarCost3;
            let grossProfit4 = TotalProcedureProfit4 + SupplementIncome4 + ConsultFees4 + labFees4 - trocarCost4;
            let grossProfit5 = TotalProcedureProfit5 + SupplementIncome5 + ConsultFees5 + labFees5 - trocarCost5;
            let grossProfit6 = TotalProcedureProfit6 + SupplementIncome6 + ConsultFees6 + labFees6 - trocarCost6;
            let grossProfit7 = TotalProcedureProfit7 + SupplementIncome7 + ConsultFees7 + labFees7 - trocarCost7;
            let grossProfit8 = TotalProcedureProfit8 + SupplementIncome8 + ConsultFees8 + labFees8 - trocarCost8;
            let grossProfit9 = TotalProcedureProfit9 + SupplementIncome9 + ConsultFees9 + labFees9 - trocarCost9;
            let grossProfit10 = TotalProcedureProfit10 + SupplementIncome10 + ConsultFees10 + labFees10 - trocarCost10;
            let grossProfit11 = TotalProcedureProfit11 + SupplementIncome11 + ConsultFees11 + labFees11 - trocarCost11;
            let grossProfit12 = TotalProcedureProfit12 + SupplementIncome12 + ConsultFees12 + labFees12 - trocarCost12;
            let grossProfit13 = TotalProcedureProfit13 + SupplementIncome13 + ConsultFees13 + labFees13 - trocarCost13;
            let grossProfit14 = TotalProcedureProfit14 + SupplementIncome14 + ConsultFees14 + labFees14 - trocarCost14;
            let grossProfit15 = TotalProcedureProfit15 + SupplementIncome15 + ConsultFees15 + labFees15 - trocarCost15;
            let grossProfit16 = TotalProcedureProfit16 + SupplementIncome16 + ConsultFees16 + labFees16 - trocarCost16;
            let grossProfit17 = TotalProcedureProfit17 + SupplementIncome17 + ConsultFees17 + labFees17 - trocarCost17;
            let grossProfit18 = TotalProcedureProfit18 + SupplementIncome18 + ConsultFees18 + labFees18 - trocarCost18;
            let grossProfit19 = TotalProcedureProfit19 + SupplementIncome19 + ConsultFees19 + labFees19 - trocarCost19;
            let grossProfit20 = TotalProcedureProfit20 + SupplementIncome20 + ConsultFees20 + labFees20 - trocarCost20;
            let grossProfit21 = TotalProcedureProfit21 + SupplementIncome21 + ConsultFees21 + labFees21 - trocarCost21;
            let grossProfit22 = TotalProcedureProfit22 + SupplementIncome22 + ConsultFees22 + labFees22 - trocarCost22;
            let grossProfit23 = TotalProcedureProfit23 + SupplementIncome23 + ConsultFees23 + labFees23 - trocarCost23;
            let grossProfit24 = TotalProcedureProfit24 + SupplementIncome24 + ConsultFees24 + labFees24 - trocarCost24;
            let grossProfit25 = TotalProcedureProfit25 + SupplementIncome25 + ConsultFees25 + labFees25 - trocarCost25;
            let grossProfit26 = TotalProcedureProfit26 + SupplementIncome26 + ConsultFees26 + labFees26 - trocarCost26;
            let grossProfit27 = TotalProcedureProfit27 + SupplementIncome27 + ConsultFees27 + labFees27 - trocarCost27;
            let grossProfit28 = TotalProcedureProfit28 + SupplementIncome28 + ConsultFees28 + labFees28 - trocarCost28;
            let grossProfit29 = TotalProcedureProfit29 + SupplementIncome29 + ConsultFees29 + labFees29 - trocarCost29;
            let grossProfit30 = TotalProcedureProfit30 + SupplementIncome30 + ConsultFees30 + labFees30 - trocarCost30;
            let grossProfit31 = TotalProcedureProfit31 + SupplementIncome31 + ConsultFees31 + labFees31 - trocarCost31;
            let grossProfit32 = TotalProcedureProfit32 + SupplementIncome32 + ConsultFees32 + labFees32 - trocarCost32;
            let grossProfit33 = TotalProcedureProfit33 + SupplementIncome33 + ConsultFees33 + labFees33 - trocarCost33;
            let grossProfit34 = TotalProcedureProfit34 + SupplementIncome34 + ConsultFees34 + labFees34 - trocarCost34;
            let grossProfit35 = TotalProcedureProfit35 + SupplementIncome35 + ConsultFees35 + labFees35 - trocarCost35;
            let grossProfit36 = TotalProcedureProfit36 + SupplementIncome36 + ConsultFees36 + labFees36 - trocarCost36;


         // without Nutra

            
            let netProfit1 = grossProfit1 - SupplementIncome1;
            let netProfit2 = grossProfit2 - SupplementIncome2;
            let netProfit3 = grossProfit3 - SupplementIncome3;
            let netProfit4 = grossProfit4 - SupplementIncome4;
            let netProfit5 = grossProfit5 - SupplementIncome5;
            let netProfit6 = grossProfit6 - SupplementIncome6;
            let netProfit7 = grossProfit7 - SupplementIncome7;
            let netProfit8 = grossProfit8 - SupplementIncome8;
            let netProfit9 = grossProfit9 - SupplementIncome9;
            let netProfit10 = grossProfit10 - SupplementIncome10;
            let netProfit11 = grossProfit11 - SupplementIncome11;
            let netProfit12 = grossProfit12 - SupplementIncome12;
            let netProfit13 = grossProfit13 - SupplementIncome13;
            let netProfit14 = grossProfit14 - SupplementIncome14;
            let netProfit15 = grossProfit15 - SupplementIncome15;
            let netProfit16 = grossProfit16 - SupplementIncome16;
            let netProfit17 = grossProfit17 - SupplementIncome17;
            let netProfit18 = grossProfit18 - SupplementIncome18;
            let netProfit19 = grossProfit19 - SupplementIncome19;
            let netProfit20 = grossProfit20 - SupplementIncome20;
            let netProfit21 = grossProfit21 - SupplementIncome21;
            let netProfit22 = grossProfit22 - SupplementIncome22;
            let netProfit23 = grossProfit23 - SupplementIncome23;
            let netProfit24 = grossProfit24 - SupplementIncome24;
            let netProfit25 = grossProfit25 - SupplementIncome25;
            let netProfit26 = grossProfit26 - SupplementIncome26;
            let netProfit27 = grossProfit27 - SupplementIncome27;
            let netProfit28 = grossProfit28 - SupplementIncome28;
            let netProfit29 = grossProfit29 - SupplementIncome29;
            let netProfit30 = grossProfit30 - SupplementIncome30;
            let netProfit31 = grossProfit31 - SupplementIncome31;
            let netProfit32 = grossProfit32 - SupplementIncome32;
            let netProfit33 = grossProfit33 - SupplementIncome33;
            let netProfit34 = grossProfit34 - SupplementIncome34;
            let netProfit35 = grossProfit35 - SupplementIncome35;
            let netProfit36 = grossProfit36 - SupplementIncome36;


            //all final results

            let totalrevenue1 = TotalProcedureRevenue1 + TotalProcedureRevenue2 + TotalProcedureRevenue3 + TotalProcedureRevenue4 + TotalProcedureRevenue5 + TotalProcedureRevenue6 + TotalProcedureRevenue7 + TotalProcedureRevenue8 + TotalProcedureRevenue9 + TotalProcedureRevenue10 + TotalProcedureRevenue11 + TotalProcedureRevenue12
                              + SupplementIncome1 + SupplementIncome2 + SupplementIncome3 + SupplementIncome4 + SupplementIncome5 + SupplementIncome6 + SupplementIncome7 + SupplementIncome8 + SupplementIncome9 + SupplementIncome10 + SupplementIncome11 + SupplementIncome12
                              + ConsultFees1 + ConsultFees2 + ConsultFees3 + ConsultFees4 + ConsultFees5 + ConsultFees6 + ConsultFees7 + ConsultFees8 + ConsultFees9 + ConsultFees10 + ConsultFees11 + ConsultFees12
                              + labFees1 + labFees2 + labFees3 + labFees4 + labFees5 + labFees6 + labFees7 + labFees8 + labFees9 + labFees10 + labFees11 + labFees12;

            let totalRevenue2 = TotalProcedureRevenue13 + TotalProcedureRevenue14 + TotalProcedureRevenue15 + TotalProcedureRevenue16 + TotalProcedureRevenue17 + TotalProcedureRevenue18 + TotalProcedureRevenue19 + TotalProcedureRevenue20 + TotalProcedureRevenue21 + TotalProcedureRevenue22 + TotalProcedureRevenue23 + TotalProcedureRevenue24
                                + SupplementIncome13 + SupplementIncome14 + SupplementIncome15 + SupplementIncome16 + SupplementIncome17 + SupplementIncome18 + SupplementIncome19 + SupplementIncome20 + SupplementIncome21 + SupplementIncome22 + SupplementIncome23 + SupplementIncome24
                                + ConsultFees13 + ConsultFees14 + ConsultFees15 + ConsultFees16 + ConsultFees17 + ConsultFees18 + ConsultFees19 + ConsultFees20 + ConsultFees21 + ConsultFees22 + ConsultFees23 + ConsultFees24
                                + labFees13 + labFees14 + labFees15 + labFees16 + labFees17 + labFees18 + labFees19 + labFees20 + labFees21 + labFees22 + labFees23 + labFees24;



            let totalRevenue3 = TotalProcedureRevenue25 + TotalProcedureRevenue26 + TotalProcedureRevenue27 + TotalProcedureRevenue28 + TotalProcedureRevenue29 + TotalProcedureRevenue30 + TotalProcedureRevenue31 + TotalProcedureRevenue32 + TotalProcedureRevenue33 + TotalProcedureRevenue34 + TotalProcedureRevenue35 + TotalProcedureRevenue36
                                + SupplementIncome25 + SupplementIncome26 + SupplementIncome27 + SupplementIncome28 + SupplementIncome29 + SupplementIncome30 + SupplementIncome31 + SupplementIncome32 + SupplementIncome33 + SupplementIncome34 + SupplementIncome35 + SupplementIncome36
                                + ConsultFees25 + ConsultFees26 + ConsultFees27 + ConsultFees28 + ConsultFees29 + ConsultFees30 + ConsultFees31 + ConsultFees32 + ConsultFees33 + ConsultFees34 + ConsultFees35 + ConsultFees36
                                + labFees25 + labFees26 + labFees27 + labFees28 + labFees29 + labFees30 + labFees31 + labFees32 + labFees33 + labFees34 + labFees35 + labFees36;

            let RevenueCombined = totalrevenue1 + totalRevenue2 + totalRevenue3 

            let netwithoutNutraceuticals1 = netProfit1 + netProfit2 + netProfit3 + netProfit4 + netProfit5 + netProfit6 + netProfit7 + netProfit8 + netProfit9 + netProfit10 + netProfit11 + netProfit12;
            let netWithoutNutraceuticals2 = netProfit13 + netProfit14 + netProfit15 + netProfit16 + netProfit17 + netProfit18 + netProfit19 + netProfit20 + netProfit21 + netProfit22 + netProfit23 + netProfit24;
            let netWithoutNutraceuticals3 = netProfit25 + netProfit26 + netProfit27 + netProfit28 + netProfit29 + netProfit30 + netProfit31 + netProfit32 + netProfit33 + netProfit34 + netProfit35 + netProfit36;
            
            let netWithoutNutraceuticalscombined  = netwithoutNutraceuticals1 + netWithoutNutraceuticals2 + netWithoutNutraceuticals3


            let grosswithNutraceuticals1 = grossProfit1 + grossProfit2 + grossProfit3 + grossProfit4 + grossProfit5 + grossProfit6 + grossProfit7 + grossProfit8 + grossProfit9 + grossProfit10 + grossProfit11 + grossProfit12;
            let grossWithNutraceuticals2 = grossProfit13 + grossProfit14 + grossProfit15 + grossProfit16 + grossProfit17 + grossProfit18 + grossProfit19 + grossProfit20 + grossProfit21 + grossProfit22 + grossProfit23 + grossProfit24;
            let grossWithNutraceuticals3 = grossProfit25 + grossProfit26 + grossProfit27 + grossProfit28 + grossProfit29 + grossProfit30 + grossProfit31 + grossProfit32 + grossProfit33 + grossProfit34 + grossProfit35 + grossProfit36;

             let grossWithNutraceuticalscombined = grosswithNutraceuticals1 + grossWithNutraceuticals2 + grossWithNutraceuticals3;

             // Format the revenues with commas and two decimal places
            const formatCurrency = (value) => {
                return value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
            };

            document.getElementById("test1").innerText = formatCurrency(totalrevenue1);
            document.getElementById("TEST2").innerText = formatCurrency(totalRevenue2);
            document.getElementById("TEST3").innerText = formatCurrency(totalRevenue3);
            document.getElementById("TEST4").innerText = formatCurrency(RevenueCombined);

            document.getElementById("TEST5").innerText = formatCurrency(netwithoutNutraceuticals1);
            document.getElementById("TEST6").innerText = formatCurrency(netWithoutNutraceuticals2);
            document.getElementById("TEST7").innerText = formatCurrency(netWithoutNutraceuticals3);
            document.getElementById("TEST8").innerText = formatCurrency(netWithoutNutraceuticalscombined);

            document.getElementById("TEST9").innerText = formatCurrency(grosswithNutraceuticals1);
            document.getElementById("TEST10").innerText = formatCurrency(grossWithNutraceuticals2);
            document.getElementById("TEST11").innerText = formatCurrency(grossWithNutraceuticals3);
            document.getElementById("TEST12").innerText = formatCurrency(grossWithNutraceuticalscombined);
                

        }













