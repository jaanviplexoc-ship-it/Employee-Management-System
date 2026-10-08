import InputField from '../atoms/InputField';

export default function LoginFields({
    email,
    password,
    setemail,
    setPassword
}) {

    return (
        <div className="input-fields">

            <div className="email-field">
                <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                />
            </div>

            <div className="password-field">
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

        </div>
    )
}