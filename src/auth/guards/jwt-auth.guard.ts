import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // This class does not require changes directly for MySQL, 
  // as MySQL integration is handled by the JwtStrategy, which validates the token payload.
}
