import React, { useRef, useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const Validation = (props) => {
  const phoneNumberRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const otpNumberRef = useRef(null);
  const [otpNumber, setOtpNumber] = useState("");
  const [resendEnabled, setResendEnabled] = useState(true); // Initially enable resend button
  const [remainingTime, setRemainingTime] = useState(60); // Initial remaining time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      } else {
        setResendEnabled(true); // Enable the button when time runs out
        setRemainingTime(60); // Reset timer
      }
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [remainingTime]); // Re-run effect when remainingTime changes

  const handleButtonClick = () => {
    if (otpNumberRef.current) {
    //   const newPhoneNumber = phoneNumberRef.current.value;
      const newOtpNumber = otpNumberRef.current.value;
    //   setPhoneNumber(newPhoneNumber);
      setOtpNumber(newOtpNumber);
    //   props.onCredChange(newPhoneNumber, newOtpNumber);
      props.onCredChange(newOtpNumber);

      // Disable the button
    //   setResendEnabled(false);
    }
  };

  const updateOtp = () => {
    props.onUpdate();
    // Disable the button
    setResendEnabled(false);
  };

  return (
    <div className="page-wrapper">
      <section className="register-one">
        <div className="auto-container">
          <div className="inner-container">
            <h3>Enter WhatsApp Otp</h3>
            <div className="register-form">
              {/* <Input
                value={props.phoneNumber}
                ref={phoneNumberRef}
                type="text"
                label="Enter WhatsApp Number"
                name="phone-number"
                placeholder="Enter WhatsApp Number"
                required={true}
              /> */}
              <Input
                ref={otpNumberRef}
                type="text"
                label="Enter WhatsApp OTP"
                name="otp"
                placeholder="Enter WhatsApp OTP Number"
                required={true}
              />
              <Button onClick={handleButtonClick} name="Submit OTP" />
              <Button onClick={updateOtp} name="Resend OTP" disabled={!resendEnabled} />
              <p className='timer'>{!resendEnabled ? `Resend OTP after 60 sec` : "You can resend OTP now"}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Validation;
