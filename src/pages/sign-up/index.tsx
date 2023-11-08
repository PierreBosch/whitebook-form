import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod'

export function SignUp() {

    const signUpFormSchema = z.object({
        fullName: z.string().min(1, 'Nome é obrigatório'),
        email: z.string().email('E-mail deve ser válido').min(1, 'E-mail é obrigatório'),
        password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
        confirmationPassword: z.string().min(1, 'Confirmar a senha é obrigatório')
    })
    .refine(data => data.password === data.confirmationPassword, {
        path: ['confirmationPassword'],
        message: 'As senhas não coincidem'
    })

    type SignUpFormType = z.infer<typeof signUpFormSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormType>({
        resolver: zodResolver(signUpFormSchema),
    })

    const signUpSubmitForm: SubmitHandler<SignUpFormType> = (values) => {
        console.log(values)
    }


    return (
        <div className="mt-20 max-w-md mx-auto">
            <h2 className="mb-5 text-2xl font-bold">Cadastre-se no Whitebook</h2>
            
            <form onSubmit={handleSubmit(signUpSubmitForm)} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label>Nome Completo</Label>
                    <Input 
                        {...register('fullName')}
                        placeholder="Digite seu nome"
                        className={cn({'focus-visible:ring-red-700': errors.fullName})}
                    />
                    {errors.fullName && (
                        <p className="text-red-700 text-sm">
                            {errors.fullName?.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <Label>E-mail</Label>
                    <Input 
                        {...register('email')}
                        placeholder="Digite seu e-mail"
                        type="email"
                        className={cn({'focus-visible:ring-red-700': errors.email})}
                    />
                    {errors.email && (
                        <p className="text-red-700 text-sm">
                            {errors.email?.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Senha</Label>
                    <Input 
                        {...register('password')}
                        placeholder="Digite sua senha"
                        type="password"
                        className={cn({'focus-visible:ring-red-700': errors.password})}
                    />
                    {errors.password && (
                        <p className="text-red-700 text-sm">
                            {errors.password?.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <Label>Confirmação de Senha</Label>
                    <Input 
                        {...register('confirmationPassword')}   
                        placeholder="Confirme sua senha"
                        type="password"
                        className={cn({'focus-visible:ring-red-700': errors.confirmationPassword})}
                    />
                    {errors.confirmationPassword && (
                        <p className="text-red-700 text-sm">
                            {errors.confirmationPassword?.message}
                        </p>
                    )}
                </div>

                <Button className="mt-3">Cadastrar-me</Button>
            </form>
        </div>
    )
}