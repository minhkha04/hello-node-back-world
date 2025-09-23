export const EMAIL_TYPES = {
    AUTH: {
        REGISTER_SUCCESS: 'auth_register_success',
        RESET_PASSWORD: 'auth_reset_password',
        SIGN_UP_OTP: 'auth_signup_otp',
    },
};

export const EMAIL_CONFIG = {
    [EMAIL_TYPES.AUTH.REGISTER_SUCCESS]: {
        subject: 'Chào mừng bạn đến với RagDB',
        template: 'register-success',
    },
    [EMAIL_TYPES.AUTH.RESET_PASSWORD]: {
        subject: 'Yêu cầu đặt lại mật khẩu',
        template: 'reset-password',
    },
    [EMAIL_TYPES.AUTH.SIGN_UP_OTP]: {
        subject: 'Mã xác thực đăng ký tài khoản',
        template: 'sign-up-otp',
    },
};
