import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PlayIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #e8c4a2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px rgba(92, 71, 51, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-left: 30px solid #fff;
    border-bottom: 20px solid transparent;
    margin-left: 8px;
  }
`;

export const LogoText = styled.div`
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: #8b6b4a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const AuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const BaseButton = styled.a`
  display: block;
  padding: 14px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.3s;
  font-size: 16px;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
`;

export const LoginButton = styled(BaseButton)`
  color: #8b6b4a;
  border: 2px solid #d7c1ab;
  background-color: transparent;

  &:hover {
    background-color: #f0e6d9;
  }
`;

export const SignupButton = styled(BaseButton)`
  color: white;
  background: linear-gradient(135deg, #d7a67e 0%, #c08a5c 100%);
  box-shadow: 0 4px 12px rgba(192, 138, 92, 0.2);

  &:hover {
    background: linear-gradient(135deg, #c08a5c 0%, #a57248 100%);
  }
`;
