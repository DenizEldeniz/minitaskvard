using FluentValidation;
using backend.Dtos;

namespace backend.Validators;

public class RegisterDtoValidator : AbstractValidator<RegisterDto>
{
    public RegisterDtoValidator()
    {
        RuleFor(x => x.Username)
            .NotEmpty().WithMessage("Kullanıcı adı zorunludur.")
            .Length(3, 20).WithMessage("Kullanıcı adı 3-20 karakter olmalıdır.")
            .Matches("^[a-zA-Z0-9]+$").WithMessage("Kullanıcı adı sadece harf ve rakam içerebilir.");

        RuleFor(x => x.Email)
            .NotEmpty().WithMessage("Email zorunludur.")
            .Must(e => e.Contains("@") && e.Contains(".")).WithMessage("Geçerli bir email adresi giriniz.");

        RuleFor(x => x.Password)
            .NotEmpty().WithMessage("Şifre zorunludur.")
            .MinimumLength(6).WithMessage("Şifre en az 6 karakter olmalıdır.")
            .Matches("[A-Z]").WithMessage("Şifre en az 1 büyük harf içermelidir.")
            .Matches("[a-z]").WithMessage("Şifre en az 1 küçük harf içermelidir.")
            .Matches("[0-9]").WithMessage("Şifre en az 1 rakam içermelidir.");
    }
}
