import React from "react";
import * as S from './styled'

const Profile = () => {
    return(
    <S.Wrapper>
         
        <S.WrapperImage
         src="https://avatars.githubusercontent.com/u/78976750?v=4" 
        alt="avatar do usuario"
        />
        <S.WrapperInfoUser>
        <div>

<h1>  Marco Costa</h1>
<S.WrapperUsername>
<h3>  Username</h3>
<a href="https://github.com/Marcosta23"
target="blank"

>
Marcosta23
</a>
</S.WrapperUsername>
        </div>
<S.WrapperStatusCounter>  
      <div><h4>Followers</h4>
      <span>5</span>
      </div>
      <div>
        <h4>Starreds</h4>
        <span>5</span>
      </div>
      <div>
        <h4>Followings</h4>
        <span>5</span>
      </div>
      </S.WrapperStatusCounter>
        </S.WrapperInfoUser>
        </S.Wrapper>
    )};

export default Profile;