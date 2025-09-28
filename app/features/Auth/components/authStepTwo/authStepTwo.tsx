import type { FC, ReactElement } from 'react'
import { useState } from 'react'

import { Typography, Input, Statistic } from "antd"
import type { GetProps, StatisticTimerProps } from 'antd'

import TitleAuth from '../titleAuth/titleAuth'
import ButtonAuth from '../buttonAuth/buttonAuth'


const AuthStepTwo: FC = (): ReactElement => {
    type OTPProps = GetProps<typeof Input.OTP>

    // visible buttons
    const [visisbleContinue, setVisisbleContinue] = useState<boolean>(false)
    const onChange: OTPProps['onChange'] = () => {
        setVisisbleContinue(true)
        setVisisbleButtonNewCode(true)
    }

    const [visisbleButtonNewCode, setVisisbleButtonNewCode] = useState<boolean>(false)
    const onFinish: StatisticTimerProps['onFinish'] = () => {
        setVisisbleButtonNewCode(true)
    }

    const sharedProps: OTPProps = {
        onChange
    }

    const [statusError, setStatusError] = useState<boolean>(false)
    const onContinue: () => void = () => {
        setStatusError(true)
    }

    return (
        <>
            <TitleAuth level={3} text='Two-Factor Authentication' styles={{ marginBottom: 4 }} />
            <Typography style={{ fontSize: 16, marginLeft: 15, marginRight: 15, marginBottom: 24 }}>Enter the 6-digit code from the Google Authenticator app</Typography>
            <Input.OTP size='large' status={!statusError ? '' : 'error'} formatter={(str) => str.toUpperCase()} {...sharedProps} />
            {statusError &&
                <div style={{ textAlign: 'left' }}><Typography.Text type="danger">Invalid code</Typography.Text></div>}
            {!visisbleButtonNewCode &&
                <Statistic.Timer
                    type="countdown"
                    value={Date.now() + 10 * 1000}
                    onFinish={onFinish}
                />}
            {visisbleButtonNewCode && !visisbleContinue &&
                <ButtonAuth size='large' type='primary' styles={{ marginTop: 16 }} text='Get new' disabled={false}
                    onClick={() => { setVisisbleButtonNewCode(false) }} />}
            {visisbleContinue &&
                <ButtonAuth size='large' type='primary' styles={{ marginTop: 16 }} text='Continue' disabled={statusError && true}
                    onClick={onContinue} />}
        </>
    )
}

export default AuthStepTwo