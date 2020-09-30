import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
  }
}
//이걸 만듦으로써, Number에서 props.theme."" 입력했을 때, ""에 theme에 저장해놓은거 자동으로 vsc에서 생성.
