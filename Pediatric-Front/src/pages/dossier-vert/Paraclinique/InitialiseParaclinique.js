import React from 'react';

async function InitialisenParaclinique(dossierId, token) {
    const initialValues = {
        AgeOsseux: '',
        AgeChronologique: '',
        GB: '',
        PLT: '',
        Hb: '',
        VGM: '',
        TCMH: '',
        Ca: '',
        Ph: '',
        K: '',
        Na: '',
        Oestradiol: '',
        Testosterone: '',
        LH: '',
        FSH: '',
        ferritinemie: '',
        IgAAntiTransglutaminases: '',
        IgATotaux: '',
        AcAntiEndomysium: '',
        BiopcieJejunale: '',
        FT4: '',
        TSH: '',
        IGF_1: '',
        TestsStimulationHormoneCroissance: '',
        CaryotypeSanguin: '',
        Uree: '',
        Creatininemie: '',
        VS: '',
        CRP: '',
        AutresFamiliaux: '',
        InsulineJJ: '',
        InsulineMM: '',
        InsulineAA: '',

        InsulineGLYCAP0: '',
        InsulineGLYCAP15: '',
        InsulineGLYCAP30: '',
        InsulineGLYCAP45: '',
        InsulineGLYCAP60: '',
        InsulineGLYCAP90: '',
        InsulineGLYCAP120: '',

        InsulineGLYVEIN0: '',
        InsulineGLYVEIN15: '',
        InsulineGLYVEIN30: '',
        InsulineGLYVEIN45: '',
        InsulineGLYVEIN60: '',
        InsulineGLYVEIN90: '',
        InsulineGLYVEIN120: '',

        InsulineGH0: '',
        InsulineGH15: '',
        InsulineGH30: '',
        InsulineGH45: '',
        InsulineGH60: '',
        InsulineGH90: '',
        InsulineGH120: '',

        InsulineCORTISOL0: '',
        InsulineCORTISOL15: '',
        InsulineCORTISOL30: '',
        InsulineCORTISOL45: '',
        InsulineCORTISOL60: '',
        InsulineCORTISOL90: '',
        InsulineCORTISOL120: '',

        InsulineACTH0: '',
        InsulineACTH15: '',
        InsulineACTH30: '',
        InsulineACTH45: '',
        InsulineACTH60: '',
        InsulineACTH90: '',
        InsulineACTH120: '',

        LDopaGLYCAP0: '',
        LDopaGLYCAP15: '',
        LDopaGLYCAP30: '',
        LDopaGLYCAP45: '',
        LDopaGLYCAP60: '',
        LDopaGLYCAP90: '',
        LDopaGLYCAP120: '',

        LDopaGLYVEIN0: '',
        LDopaGLYVEIN15: '',
        LDopaGLYVEIN30: '',
        LDopaGLYVEIN45: '',
        LDopaGLYVEIN60: '',
        LDopaGLYVEIN90: '',
        LDopaGLYVEIN120: '',

        LDopaGH0: '',
        LDopaGH15: '',
        LDopaGH30: '',
        LDopaGH45: '',
        LDopaGH60: '',
        LDopaGH90: '',
        LDopaGH120: '',

        LDopaCORTISOL0: '',
        LDopaCORTISOL15: '',
        LDopaCORTISOL30: '',
        LDopaCORTISOL45: '',
        LDopaCORTISOL60: '',
        LDopaCORTISOL90: '',
        LDopaCORTISOL120: '',

        LDopaACTH0: '',
        LDopaACTH15: '',
        LDopaACTH30: '',
        LDopaACTH45: '',
        LDopaACTH60: '',
        LDopaACTH90: '',
        LDopaACTH120: '',
        dossier: `/api/dossiers/${dossierId}`,
        submit: null
    };
    try {
        const response = await addParaclinique({ body: initialValues, token: token });
        //const generatedId = response.data.id;
    } catch (err) {
        console.error(err);
    }
}

export default InitialisenParaclinique;
