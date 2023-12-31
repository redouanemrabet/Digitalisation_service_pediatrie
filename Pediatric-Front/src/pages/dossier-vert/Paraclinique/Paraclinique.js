import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FormGroup, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import {
  useAddParacliniqueMutation
} from "../../../services/PatientService/dossiers-vert-service/paraclinique-api/addParacliniqueApi";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

// project import
import AnimateButton from "components/@extended/AnimateButton";
import { strengthColor, strengthIndicator } from "utils/password-strength";
import { useNavigate } from "react-router";


// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import {
  useAddExamenPhysiqueMutation
} from "../../../services/PatientService/dossiers-vert-service/examen-physique-api/addExamenPhysiqueApi";
import { selectUserAndToken } from "../../../store/slices/authSlice";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Root = styled("div")(
  ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid ${
    theme.palette.mode === "dark" ? grey[800] : grey[200]
  };
      text-align: left;
      padding: 6px;
    }
  
    th {
      background-color: ${
    theme.palette.mode === "dark" ? grey[900] : grey[100]
  };
    }
    `
);

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

function Paraclinique() {
  const navigate = useNavigate();
  const { patientId , dossierId } = useParams();
  const [addParaclinique, { isLoading, isError, error }] = useAddParacliniqueMutation();

  const { token } = useSelector(selectUserAndToken);
  const handleGoBack = () => {
    navigate(-1); // Revenir à la page précédente
  };
  return (
    <Formik
      initialValues={{
        AgeOsseux: "",
        AgeChronologique: "",
        GB: "",
        PLT: "",
        Hb: "",
        VGM: "",
        TCMH: "",
        Ca: "",
        Ph: "",
        K: "",
        Na: "",
        Oestradiol: "",
        Testosterone: "",
        LH: "",
        FSH: "",
        ferritinemie: "",
        IgAAntiTransglutaminases: "",
        IgATotaux: "",
        AcAntiEndomysium: "",
        BiopcieJejunale: "",
        FT4: "",
        TSH: "",
        IGF_1: "",
        TestsStimulationHormoneCroissance: "",
        CaryotypeSanguin: "",
        Uree: "",
        Creatininemie: "",
        VS: "",
        CRP: "",
        AutresFamiliaux: "",
        InsulineJJ: "",
        InsulineMM: "",
        InsulineAA: "",

        InsulineGLYCAP0: "",
        InsulineGLYCAP15: "",
        InsulineGLYCAP30: "",
        InsulineGLYCAP45: "",
        InsulineGLYCAP60: "",
        InsulineGLYCAP90: "",
        InsulineGLYCAP120: "",

        InsulineGLYVEIN0: "",
        InsulineGLYVEIN15: "",
        InsulineGLYVEIN30: "",
        InsulineGLYVEIN45: "",
        InsulineGLYVEIN60: "",
        InsulineGLYVEIN90: "",
        InsulineGLYVEIN120: "",

        InsulineGH0: "",
        InsulineGH15: "",
        InsulineGH30: "",
        InsulineGH45: "",
        InsulineGH60: "",
        InsulineGH90: "",
        InsulineGH120: "",

        InsulineCORTISOL0: "",
        InsulineCORTISOL15: "",
        InsulineCORTISOL30: "",
        InsulineCORTISOL45: "",
        InsulineCORTISOL60: "",
        InsulineCORTISOL90: "",
        InsulineCORTISOL120: "",

        InsulineACTH0: "",
        InsulineACTH15: "",
        InsulineACTH30: "",
        InsulineACTH45: "",
        InsulineACTH60: "",
        InsulineACTH90: "",
        InsulineACTH120: "",

        LDopaGLYCAP0: "",
        LDopaGLYCAP15: "",
        LDopaGLYCAP30: "",
        LDopaGLYCAP45: "",
        LDopaGLYCAP60: "",
        LDopaGLYCAP90: "",
        LDopaGLYCAP120: "",

        LDopaGLYVEIN0: "",
        LDopaGLYVEIN15: "",
        LDopaGLYVEIN30: "",
        LDopaGLYVEIN45: "",
        LDopaGLYVEIN60: "",
        LDopaGLYVEIN90: "",
        LDopaGLYVEIN120: "",

        LDopaGH0: "",
        LDopaGH15: "",
        LDopaGH30: "",
        LDopaGH45: "",
        LDopaGH60: "",
        LDopaGH90: "",
        LDopaGH120: "",

        LDopaCORTISOL0: "",
        LDopaCORTISOL15: "",
        LDopaCORTISOL30: "",
        LDopaCORTISOL45: "",
        LDopaCORTISOL60: "",
        LDopaCORTISOL90: "",
        LDopaCORTISOL120: "",

        LDopaACTH0: "",
        LDopaACTH15: "",
        LDopaACTH30: "",
        LDopaACTH45: "",
        LDopaACTH60: "",
        LDopaACTH90: "",
        LDopaACTH120: "",
        dossier: `/api/dossiers/${dossierId}`,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        AgeOsseux: Yup.string(),
        AgeChronologique: Yup.string(),
        GB: Yup.number(),
        PLT: Yup.number(),
        Hb: Yup.number(),
        VGM: Yup.number(),
        TCMH: Yup.number(),
        Ca: Yup.number(),
        Ph: Yup.number(),
        K: Yup.number(),
        Na: Yup.number(),
        Oestradiol: Yup.number(),
        Testosterone: Yup.number(),
        LH: Yup.number(),
        FSH: Yup.number(),
        ferritinemie: Yup.number(),
        IgAAntiTransglutaminases: Yup.number(),
        IgATotaux: Yup.number(),
        AcAntiEndomysium: Yup.number(),
        BiopcieJejunale: Yup.number(),
        FT4: Yup.number(),
        TSH: Yup.number(),
        IGF_1: Yup.number(),
        TestsStimulationHormoneCroissance: Yup.number(),
        CaryotypeSanguin: Yup.string(),
        Uree: Yup.number(),
        Creatininemie: Yup.number(),
        VS: Yup.number(),
        CRP: Yup.number(),
        AutresFamiliaux: Yup.string(),
        InsulineJJ: Yup.number(),
        InsulineMM: Yup.number(),
        InsulineAA: Yup.number(),

        InsulineGLYCAP0: Yup.number(),
        InsulineGLYCAP15: Yup.number(),
        InsulineGLYCAP30: Yup.number(),
        InsulineGLYCAP45: Yup.number(),
        InsulineGLYCAP60: Yup.number(),
        InsulineGLYCAP90: Yup.number(),
        InsulineGLYCAP120: Yup.number(),

        InsulineGLYVEIN0: Yup.number(),
        InsulineGLYVEIN15: Yup.number(),
        InsulineGLYVEIN30: Yup.number(),
        InsulineGLYVEIN45: Yup.number(),
        InsulineGLYVEIN60: Yup.number(),
        InsulineGLYVEIN90: Yup.number(),
        InsulineGLYVEIN120: Yup.number(),

        InsulineGH0: Yup.number(),
        InsulineGH15: Yup.number(),
        InsulineGH30: Yup.number(),
        InsulineGH45: Yup.number(),
        InsulineGH60: Yup.number(),
        InsulineGH90: Yup.number(),
        InsulineGH120: Yup.number(),

        InsulineCORTISOL0: Yup.number(),
        InsulineCORTISOL15: Yup.number(),
        InsulineCORTISOL30: Yup.number(),
        InsulineCORTISOL45: Yup.number(),
        InsulineCORTISOL60: Yup.number(),
        InsulineCORTISOL90: Yup.number(),
        InsulineCORTISOL120: Yup.number(),

        InsulineACTH0: Yup.number(),
        InsulineACTH15: Yup.number(),
        InsulineACTH30: Yup.number(),
        InsulineACTH45: Yup.number(),
        InsulineACTH60: Yup.number(),
        InsulineACTH90: Yup.number(),
        InsulineACTH120: Yup.number(),

        LDopaGLYCAP0: Yup.number(),
        LDopaGLYCAP15: Yup.number(),
        LDopaGLYCAP30: Yup.number(),
        LDopaGLYCAP45: Yup.number(),
        LDopaGLYCAP60: Yup.number(),
        LDopaGLYCAP90: Yup.number(),
        LDopaGLYCAP120: Yup.number(),

        LDopaGLYVEIN0: Yup.number(),
        LDopaGLYVEIN15: Yup.number(),
        LDopaGLYVEIN30: Yup.number(),
        LDopaGLYVEIN45: Yup.number(),
        LDopaGLYVEIN60: Yup.number(),
        LDopaGLYVEIN90: Yup.number(),
        LDopaGLYVEIN120: Yup.number(),

        LDopaGH0: Yup.number(),
        LDopaGH15: Yup.number(),
        LDopaGH30: Yup.number(),
        LDopaGH45: Yup.number(),
        LDopaGH60: Yup.number(),
        LDopaGH90: Yup.number(),
        LDopaGH120: Yup.number(),

        LDopaCORTISOL0: Yup.number(),
        LDopaCORTISOL15: Yup.number(),
        LDopaCORTISOL30: Yup.number(),
        LDopaCORTISOL45: Yup.number(),
        LDopaCORTISOL60: Yup.number(),
        LDopaCORTISOL90: Yup.number(),
        LDopaCORTISOL120: Yup.number(),

        LDopaACTH0: Yup.number(),
        LDopaACTH15: Yup.number(),
        LDopaACTH30: Yup.number(),
        LDopaACTH45: Yup.number(),
        LDopaACTH60: Yup.number(),
        LDopaACTH90: Yup.number(),
        LDopaACTH120: Yup.number(),

        telephone: Yup.number(),

      })}

      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {

          const response = await addParaclinique({ body: values, token: token });


          console.log(values);
          setStatus({ success: true });
          setSubmitting(false);
          navigate(-1);
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={11}>
                <Item>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      p: 2,
                      m: -1
                    }}
                  >
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconButton
                          onClick={handleGoBack}
                          sx={{
                            color: 'white'
                          }}
                        >
                          <ArrowBackIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{
                          textAlign: 'center'
                        }}
                      >
                        PARACLINIQUE
                      </Typography>
                    </Grid>
                  </Box>
                  <br></br>
                  <br></br>
                  <FormGroup sx={{ mt: 2 }}>
                    <FormControl>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="AgeOsseux"
                              name="AgeOsseux"
                              type="number"
                              label="Age osseux !"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.AgeOsseux}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="AgeChronologique"
                              name="AgeChronologique"
                              type="number"
                              label="Age chronologique "
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.AgeChronologique}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <FormLabel id="NFS">NFS :</FormLabel>
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="GB"
                              name="GB"
                              type="number"
                              label="GB"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.GB}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="PLT"
                              name="PLT"
                              type="number"
                              label="PLT"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.PLT}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="Hb"
                              name="Hb"
                              type="number"
                              label="Hb"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Hb}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="VGM"
                              name="VGM"
                              type="number"
                              label="VGM"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.VGM}
                            />
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextField
                              id="TCMH"
                              name="TCMH"
                              type="number"
                              label="TCMH"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.TCMH}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <FormLabel className="mr-2" id="IonogrammeSanguin">
                              Ionogramme sanguin :
                            </FormLabel>
                          </Grid>
                        </Grid>
                      </Box>

                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Ca"
                              name="Ca"
                              type="number"
                              label="Ca"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Ca}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Ph"
                              name="Ph"
                              type="number"
                              label="Ph"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Ph}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="K"
                              name="K"
                              type="number"
                              label="K"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.K}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Na"
                              name="Na"
                              type="number"
                              label="Na"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Na}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <FormLabel id="NFS">Hormones sexuelles :</FormLabel>
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Oestradiol"
                              name="Oestradiol"
                              type="number"
                              label="Oestradiol"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Oestradiol}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Testosterone"
                              name="Testosterone"
                              type="number"
                              label="Testostérone"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Testosterone}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="LH"
                              name="LH"
                              type="number"
                              label="LH"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.LH}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="FSH"
                              name="FSH"
                              type="number"
                              label="FSH"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.FSH}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="ferritinemie"
                              name="ferritinemie"
                              type="number"
                              label="Ferritinémie"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.ferritinemie}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="IgAAntiTransglutaminases"
                              name="IgAAntiTransglutaminases"
                              type="number"
                              label="IgA anti-transglutaminases"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.IgAAntiTransglutaminases}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="IgATotaux"
                              name="IgATotaux"
                              type="number"
                              label="IgA totaux"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.IgATotaux}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="AcAntiEndomysium"
                              name="AcAntiEndomysium"
                              type="number"
                              label="Ac anti endomysium "
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.AcAntiEndomysium}
                            />
                          </Grid>
                        </Grid>
                      </Box>

                      <br></br>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="BiopcieJejunale"
                              name="BiopcieJejunale"
                              type="number"
                              label="Biopcie jéjunale"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.BiopcieJejunale}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="FT4"
                              name="FT4"
                              type="number"
                              label="FT4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.FT4}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="TSH"
                              name="TSH"
                              type="number"
                              label="TSH"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.TSH}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="IGF_1"
                              name="IGF_1"
                              type="number"
                              label="IGF-1"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.IGF_1}
                            />
                          </Grid>
                        </Grid>
                      </Box>

                      <br></br>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="TestsStimulationHormoneCroissance"
                              name="TestsStimulationHormoneCroissance"
                              type="number"
                              label="Tests de stimulation de l’hormone de croissance"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.TestsStimulationHormoneCroissance}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              id="CaryotypeSanguin"
                              name="CaryotypeSanguin"
                              type="text"
                              label="Caryotype sanguin"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.CaryotypeSanguin}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Uree"
                              name="Uree"
                              type="number"
                              label="Urée"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Uree}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="Creatininemie"
                              name="Creatininemie"
                              type="number"
                              label="Créatininémie"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.Creatininemie}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              id="VS"
                              name="VS"
                              type="number"
                              label="VS"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.VS}
                            />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextField
                              name="CRP"
                              id="CRP"
                              type="number"
                              label="CRP"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.CRP}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                          <Grid sx={{ md: 1 }} item xs={12} md={12}>
                            <label htmlFor="AutresExamenPhysique">
                              Autres :
                            </label>
                            <TextField
                              className="form-control"
                              name="AutresFamiliaux"
                              id="AutresFamiliaux"
                              onChange={handleChange}
                              value={values.AutresFamiliaux}
                              sx={{ width: "100%" }}
                              size="small"
                              type="text"
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={1}>
                            <FormLabel id="NFS">Insuline :</FormLabel>
                          </Grid>
                          <Grid item xs={12} md={1}>
                            <TextField
                              id="InsulineJJ"
                              name="InsulineJJ"
                              type="number"
                              label="Jour"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.InsulineJJ}
                            />
                          </Grid>
                          <Grid item xs={12} md={1}>
                            <TextField
                              id="InsulineMM"
                              name="InsulineMM"
                              type="number"
                              label="Mois"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.InsulineMM}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="InsulineAA"
                              name="InsulineAA"
                              type="number"
                              label="Année"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              value={values.InsulineAA}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <Root sx={{ width: "100%", maxWidth: "100%" }}>
                              <table className="table">
                                <thead>
                                <tr>
                                  {/* <th className="largeur-texte" scope="col" style={{ width: '80%' }}>Suivi</th>
                              <th scope="col" style={{ width: '20%' }}>Date</th> */}
                                  <th> </th>
                                  <th sx={{ textAlign: "center" }}>
                                    GLY CAP
                                  </th>
                                  <th>GLY VEIN</th>
                                  <th>GH</th>
                                  <th>CORTISOL</th>
                                  <th>ACTH</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>0</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYCAP0"
                                      name="InsulineGLYCAP0"
                                      type="number"
                                      value={values.InsulineGLYCAP0}
                                      onChange={handleChange}
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYVEIN0"
                                      name="InsulineGLYVEIN0"
                                      value={values.InsulineGLYVEIN0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGH0"
                                      name="InsulineGH0"
                                      value={values.InsulineGH0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineCORTISOL0"
                                      name="InsulineCORTISOL0"
                                      value={values.InsulineCORTISOL0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineACTH0"
                                      name="InsulineACTH0"
                                      value={values.InsulineACTH0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYCAP15"
                                      name="InsulineGLYCAP15"
                                      value={values.InsulineGLYCAP15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYVEIN15"
                                      name="InsulineGLYVEIN15"
                                      value={values.InsulineGLYVEIN15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGH15"
                                      name="InsulineGH15"
                                      value={values.InsulineGH15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineCORTISOL15"
                                      name="InsulineCORTISOL15"
                                      value={values.InsulineCORTISOL15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineACTH15"
                                      name="InsulineACTH15"
                                      value={values.InsulineACTH15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>30</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYCAP30"
                                      name="InsulineGLYCAP30"
                                      value={values.InsulineGLYCAP30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYVEIN30"
                                      name="InsulineGLYVEIN30"
                                      value={values.InsulineGLYVEIN30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGH30"
                                      name="InsulineGH30"
                                      value={values.InsulineGH30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineCORTISOL30"
                                      name="InsulineCORTISOL30"
                                      value={values.InsulineCORTISOL30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineACTH30"
                                      name="InsulineACTH30"
                                      value={values.InsulineACTH30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>45</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYCAP45"
                                      name="InsulineGLYCAP45"
                                      value={values.InsulineGLYCAP45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYVEIN45"
                                      name="InsulineGLYVEIN45"
                                      value={values.InsulineGLYVEIN45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGH45"
                                      name="InsulineGH45"
                                      value={values.InsulineGH45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineCORTISOL45"
                                      name="InsulineCORTISOL45"
                                      value={values.InsulineCORTISOL45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineACTH45"
                                      name="InsulineACTH45"
                                      value={values.InsulineACTH45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>60</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYCAP60"
                                      name="InsulineGLYCAP60"
                                      value={values.InsulineGLYCAP60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYVEIN60"
                                      name="InsulineGLYVEIN60"
                                      value={values.InsulineGLYVEIN60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGH60"
                                      name="InsulineGH60"
                                      value={values.InsulineGH60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineCORTISOL60"
                                      name="InsulineCORTISOL60"
                                      value={values.InsulineCORTISOL60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineACTH60"
                                      name="InsulineACTH60"
                                      value={values.InsulineACTH60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>90</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYCAP90"
                                      name="InsulineGLYCAP90"
                                      value={values.InsulineGLYCAP90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYVEIN90"
                                      name="InsulineGLYVEIN90"
                                      value={values.InsulineGLYVEIN90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGH90"
                                      name="InsulineGH90"
                                      value={values.InsulineGH90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineCORTISOL90"
                                      name="InsulineCORTISOL90"
                                      value={values.InsulineCORTISOL90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineACTH90"
                                      name="InsulineACTH90"
                                      value={values.InsulineACTH90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>120</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYCAP120"
                                      name="InsulineGLYCAP120"
                                      value={values.InsulineGLYCAP120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGLYVEIN120"
                                      name="InsulineGLYVEIN120"
                                      value={values.InsulineGLYVEIN120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineGH120"
                                      name="InsulineGH120"
                                      value={values.InsulineGH120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineCORTISOL120"
                                      name="InsulineCORTISOL120"
                                      value={values.InsulineCORTISOL120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="InsulineACTH120"
                                      name="InsulineACTH120"
                                      value={values.InsulineACTH120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </Root>
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={1}>
                            <FormLabel id="NFS">L Dopa :</FormLabel>
                          </Grid>
                          <Grid item xs={12} md={1}>
                            <TextField
                              id="LDopaJJ"
                              name="LDopaJJ"
                              label="Jour"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              type="number"
                              value={values.LDopaJJ}
                            />
                          </Grid>
                          <Grid item xs={12} md={1}>
                            <TextField
                              id="LDopaMM"
                              name="LDopaMM"
                              label="Mois"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              type="number"
                              value={values.LDopaMM}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextField
                              id="LDopaAA"
                              name="LDopaAA"
                              label="Année"
                              variant="outlined"
                              size="small"
                              fullWidth
                              onChange={handleChange}
                              type="number"
                              value={values.LDopaAA}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <Root sx={{ width: "100%", maxWidth: "100%" }}>
                              <table className="table">
                                <thead>
                                <tr>
                                  {/* <th className="largeur-texte" scope="col" style={{ width: '80%' }}>Suivi</th>
                              <th scope="col" style={{ width: '20%' }}>Date</th> */}
                                  <th> </th>
                                  <th sx={{ textAlign: "center" }}>
                                    GLY CAP
                                  </th>
                                  <th>GLY VEIN</th>
                                  <th>GH</th>
                                  <th>CORTISOL</th>
                                  <th>ACTH</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                  <td>0</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYCAP0"
                                      name="LDopaGLYCAP0"
                                      value={values.LDopaGLYCAP0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYVEIN0"
                                      name="LDopaGLYVEIN0"
                                      value={values.LDopaGLYVEIN0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGH0"
                                      name="LDopaGH0"
                                      value={values.LDopaGH0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaCORTISOL0"
                                      name="LDopaCORTISOL0"
                                      value={values.LDopaCORTISOL0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaACTH0"
                                      name="LDopaACTH0"
                                      value={values.LDopaACTH0}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>15</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYCAP15"
                                      name="LDopaGLYCAP15"
                                      value={values.LDopaGLYCAP15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYVEIN15"
                                      name="LDopaGLYVEIN15"
                                      value={values.LDopaGLYVEIN15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGH15"
                                      name="LDopaGH15"
                                      value={values.LDopaGH15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaCORTISOL15"
                                      name="LDopaCORTISOL15"
                                      value={values.LDopaCORTISOL15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaACTH15"
                                      name="LDopaACTH15"
                                      value={values.LDopaACTH15}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>30</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYCAP30"
                                      name="LDopaGLYCAP30"
                                      value={values.LDopaGLYCAP30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYVEIN30"
                                      name="LDopaGLYVEIN30"
                                      value={values.LDopaGLYVEIN30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGH30"
                                      name="LDopaGH30"
                                      value={values.LDopaGH30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaCORTISOL30"
                                      name="LDopaCORTISOL30"
                                      value={values.LDopaCORTISOL30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaACTH30"
                                      name="LDopaACTH30"
                                      value={values.LDopaACTH30}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>45</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYCAP45"
                                      name="LDopaGLYCAP45"
                                      value={values.LDopaGLYCAP45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYVEIN45"
                                      name="LDopaGLYVEIN45"
                                      value={values.LDopaGLYVEIN45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGH45"
                                      name="LDopaGH45"
                                      value={values.LDopaGH45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaCORTISOL45"
                                      name="LDopaCORTISOL45"
                                      value={values.LDopaCORTISOL45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaACTH45"
                                      name="LDopaACTH45"
                                      value={values.LDopaACTH45}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>60</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYCAP60"
                                      name="LDopaGLYCAP60"
                                      value={values.LDopaGLYCAP60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYVEIN60"
                                      name="LDopaGLYVEIN60"
                                      value={values.LDopaGLYVEIN60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGH60"
                                      name="LDopaGH60"
                                      value={values.LDopaGH60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaCORTISOL60"
                                      name="LDopaCORTISOL60"
                                      value={values.LDopaCORTISOL60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaACTH60"
                                      name="LDopaACTH60"
                                      value={values.LDopaACTH60}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>90</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYCAP90"
                                      name="LDopaGLYCAP90"
                                      value={values.LDopaGLYCAP90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYVEIN90"
                                      name="LDopaGLYVEIN90"
                                      value={values.LDopaGLYVEIN90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGH90"
                                      name="LDopaGH90"
                                      value={values.LDopaGH90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaCORTISOL90"
                                      name="LDopaCORTISOL90"
                                      value={values.LDopaCORTISOL90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaACTH90"
                                      name="LDopaACTH90"
                                      value={values.LDopaACTH90}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>120</td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYCAP120"
                                      name="LDopaGLYCAP120"
                                      value={values.LDopaGLYCAP120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGLYVEIN120"
                                      name="LDopaGLYVEIN120"
                                      value={values.LDopaGLYVEIN120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>

                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaGH120"
                                      name="LDopaGH120"
                                      value={values.LDopaGH120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaCORTISOL120"
                                      name="LDopaCORTISOL120"
                                      value={values.LDopaCORTISOL120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                  <td>
                                    <TextField
                                      sx={{
                                        "& .MuiInputLabel-root": {
                                          color: "black",
                                        },
                                        border: "1px none black",
                                        borderRadius: 0,
                                      }}
                                      InputProps={{ disableUnderline: true }}
                                      variant="standard"
                                      id="LDopaACTH120"
                                      name="LDopaACTH120"
                                      value={values.LDopaACTH120}
                                      onChange={handleChange}
                                      type="number"
                                    />
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </Root>
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                      <br></br>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} justifyContent="end">
                          <Grid item xs={12} md={2}>
                            <Stack spacing={2} direction="row">
                              <ColorButton
                                type="reset"
                                variant="contained"
                                sx={{ width: "100%" }}
                              >
                                <label className="bouton">Effacer</label>
                              </ColorButton>
                              <BootstrapButton
                                type="submit"
                                disabled={isSubmitting}
                                variant="contained"
                                disableRipple
                                sx={{ width: "100%" }}
                              >
                                <label className="bouton">VALIDER</label>
                              </BootstrapButton>
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                      <br></br>
                    </FormControl>
                  </FormGroup>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </form>
      )}
    </Formik>
  );
}
export default Paraclinique;
