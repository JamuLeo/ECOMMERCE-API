import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  // This class doesn't need additional code because it's using the 'local' strategy
  // If necessary, you can override methods to add custom behavior here
}
