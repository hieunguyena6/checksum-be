import { IsDefined, IsString } from 'class-validator';

export class CreateFileChecksumDto {
  @IsDefined()
  @IsString()
  public checksum: string;

  @IsDefined()
  @IsString()
  public fileName: string;
}

export class getFileChecksum {
  @IsDefined()
  @IsString()
  public checksum: string;
}
