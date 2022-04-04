import { Alert, AlertTitle } from "@material-ui/lab";


export function alertaCorrecta(){
    return (
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
        </Alert>
    )
}

export function alertaIncorrecta(){
    return (
        <Alert severity="error">
            <AlertTitle>Failure</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
        </Alert>
    )
}