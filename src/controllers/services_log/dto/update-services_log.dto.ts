import { PartialType } from '@nestjs/swagger';
import { CreateServicesLogDto } from './create-services_log.dto';

export class UpdateServicesLogDto extends PartialType(CreateServicesLogDto) {}
