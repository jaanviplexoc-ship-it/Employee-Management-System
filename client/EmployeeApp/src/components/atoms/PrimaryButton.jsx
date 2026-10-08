import { Button } from '@mui/material'

export default function PrimaryButton({ type }) {

    return (
        <Button
            variant="contained"
            fullWidth
            type={type}
        >
            Login
        </Button>
    )
}