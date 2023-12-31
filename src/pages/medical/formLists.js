export const formList = {
    newborn: {
        saved: false,
        isSubmit: true,
        genderType: '',
        parentName:'',
        age:'',
        country: '',
        state: '',
        zipcode: '',
        newbornComments: '',
        documents: []
    },
    genderType: ['Male', 'Female', 'Other'],
    deficiency:['yes' , 'No'],
    
    regular: {
        saved: false,
        isSubmit: true,
        genderType: '',
        parentName:'',
        kidsNo:'',
        age:'',
        country: '',
        state: '',
        zipcode: '',
        height:'',
        weight:'',
        regularComments: '',
        documents: []
    },
    regularMenu: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    regularType: ['Male', 'Female', 'Other'],
    localeByCountry: {
        'IN': 'en-IN',
        'US': 'en-US'
    },
    currencyByCountry: {
        'IN': 'INR',
        'US': 'USD'
    },
    hospitalName:['Medi Cure', 'Medi Care', 'Miniute Clinic'],
    bloodGroup:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    doctorName:['Rajashekar', 'Vijaya', 'Latha'],
    immuneName:['Covid', 'Flu' , 'Booster'],
    apgarScore:['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
    otherScore:['A+', 'A', 'B+'],
    immune: {
        saved: false,
        isSubmit: true,
        hospitalName: '',
        from:'',
        country: '',
        state: '',
        zipcode: '',
        lastDose: '',
        doseName:'',
        nextDose:'',
        immuneDose:true,
        age:'',
        isRecentImmune: true,
        isNextdose: true,
        immuneComments: '',
        documents: [],
    },
    doseName:['first','second'],
    immuneType: ['Flu','Covid'],
    optDose:['Yes', 'No'],
    secondDose:['Yes', 'No'],
    optDoseValues:['Yes', 'No'],
    allergi: {
        saved: false,
        isSubmit: true,
        country: '',
        state: '',
        zipcode: '',
        from: '',
        allergiComments: '',
        documents: [],
    },
    
    healthinfo: {
        saved: false,
        isSubmit: true,
        food:false,
        insect:false,
        latex:false,
        prescribed:false,
        type1:false,
        type2:false,
        cancer:'',
        fibrocis:'',
        dentalOral:'',
        earNose:'',
        lungDecease:'',
        MobileImpairment:'',
        DietaryPreference:'',
        bloodDisorder:'',
        gastrointestinal:'',
        hearing:'',
        healthinfoComments: '',
        documents: []
    },
    anyAllergies:['yes', 'No'],
    prevInjection:['yes', 'No'],
    prevInhaler:['yes', 'No'],
    isPrescribed:['yes', 'No'],
    preInjection:['yes', 'No'],
    isNebulizer:['yes', 'No'],
    isInhaler:['yes', 'No'],
    isNebulizer:['yes', 'No'],
    isNebulizertreat:['yes', 'No'],
    surgery: {
        saved: false,
        isSubmit: true,
        hospitalName: '',
        dischargeDate:'',
        surgeryUnit:'',
        insuranceHelp:true,
        insureCovered:'',
        isRecentSurgery: true,
        surgeryComments: '',
        documents: [],
    },
    surgeryType: ['LLC', 'Ortho'],
    status:['Yes', 'No'],
    medication: {
        saved: false,
        isSubmit: true,
        medicineName: '',
        medicineDose: '',
        providerName:'',
        pharmacyDetail:'',
        from: '',
        to: '',
        isRecentMedication: true,
        isNeedRefill:true,
        medicationComments: '',
        documents: [],
    },
    medicationType: ['Flu' , 'Cold'],
    refill:['Yes' , 'No']
    
    
    
};