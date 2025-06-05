import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: solid #00e1d3 1px;
  background: #1b263b;
  padding: 2rem;
  min-height: 400px;
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
  background: #00e1d3;
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
    border-left: 30px solid #1b263b;
    border-bottom: 20px solid transparent;
    margin-left: 8px;
  }
`;

export const LogoText = styled.div`
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: #00e1d3;
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
  color: #00e1d3;
  border: 2px solid #00e1d3;
  background-color: #1b263b;
`;

export const SignupButton = styled(BaseButton)`
  color: #1b263b;
  background: #00e1d3;
  box-shadow: 0 4px 12px rgba(192, 138, 92, 0.2);

  &:hover {
    background: linear-gradient(135deg, #00f0e0 0%, #00e1d3 50%, #00b4a0 100%);
  }
`;
