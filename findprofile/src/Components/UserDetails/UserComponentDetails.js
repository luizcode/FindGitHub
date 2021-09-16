import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #292929;
  padding-left: 15px;
  margin-top: 100px;
`;
export const Name = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  padding-left: 15px;
`;
export const Email = styled.p`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: #292929;
  padding-left: 15px;
`;
export const Location = styled.p`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: #292929;
  padding-left: 15px;
`;
export const Username = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  padding-left: 15px;
  background-color: #292929;
`;
export const Description = styled.p`
  width: 400px;
  height: 200px;
  margin: 10px 0;
  font-size: 18px;
  text-align: center;
  color: #fff;
  line-height: 1.3;
  overflow: hidden;

  @media (max-width: 430px) {
    width: 250px;
  }
`;
